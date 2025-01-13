import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import CloudinaryService from '../data/services/cloudinaryService';
import getFullImagePath from '../lib/urlComplete';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const cloudinaryService = new CloudinaryService();
const API_KEY = process.env.READ_API_TMDB;

async function cleanDatabase() {
  console.log('Limpiando base de datos...');
  try {
    await prisma.movie.deleteMany();
    await prisma.genre.deleteMany();
    console.log('Base de datos limpiada exitosamente');
  } catch (error) {
    console.error('Error limpiando la base de datos:', error);
    throw error;
  }
}

async function fetchWithRetry(url: string, config: any, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios({
        ...config,
        url,
        timeout: 5000,
      });
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Reintentando petición ${i + 1}/${retries}`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function fetchGenres() {
  const response = await fetchWithRetry('https://api.themoviedb.org/3/genre/movie/list', {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  });
  return response?.data.genres;
}

async function fetchMoviesByGenre(genreId: number, page: number) {
  try {
    const response = await fetchWithRetry('https://api.themoviedb.org/3/discover/movie', {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        page: page
      }
    });
    return response?.data;
  } catch (error) {
    console.error(`Error fetching page ${page} for genre ${genreId}:`);
    return { results: [] };
  }
}

async function uploadMovieImages(backdropPath: string | null, posterPath: string | null) {
  let backdropUrl = null;
  let posterUrl = null;

  try {
    if (backdropPath) {
      const fullBackdropPath = getFullImagePath(backdropPath);
      backdropUrl = await cloudinaryService.uploadImage(fullBackdropPath);
    }

    if (posterPath) {
      const fullPosterPath = getFullImagePath(posterPath);
      posterUrl = await cloudinaryService.uploadImage(fullPosterPath);
    }

    return { backdropUrl, posterUrl };
  } catch (error) {
    console.error('Error uploading images:', error);
    return { backdropUrl: null, posterUrl: null };
  }
}

async function main() {
  await cleanDatabase();
  console.log('Iniciando proceso de seed...');

  const genres = await fetchGenres();

  for (const genre of genres) {
    let page = 1;
    const maxPages = 250;

    while (page <= maxPages) {
      const data = await fetchMoviesByGenre(genre.id, page);
      const movies = data.results;

      for (const movie of movies) {
        const existingMovie = await prisma.movie.findUnique({
          where: { tmdbId: movie.id },
        });

        if (!existingMovie) {
          console.log(`Procesando película: ${movie.title}`);

          const { backdropUrl, posterUrl } = await uploadMovieImages(
            movie.backdrop_path,
            movie.poster_path
          );

          const genreConnections = movie.genre_ids.map((genreId: number) => ({
            where: { tmdbId: genreId },
            create: { tmdbId: genreId, name: '', description: null },
          }));

          const releaseDate = movie.release_date ? new Date(movie.release_date) : new Date('1970-01-01');

          await prisma.movie.create({
            data: {
              tmdbId: movie.id,
              adult: movie.adult,
              backdropPath: backdropUrl || movie.backdrop_path,
              originalLanguage: movie.original_language,
              originalTitle: movie.original_title,
              overview: movie.overview,
              popularity: movie.popularity,
              posterPath: posterUrl || movie.poster_path,
              releaseDate: releaseDate,
              title: movie.title,
              video: movie.video,
              voteAverage: movie.vote_average,
              voteCount: movie.vote_count,
              genres: {
                connectOrCreate: genreConnections,
              },
            },
          });

          console.log(`Película guardada: ${movie.title}`);
        }
      }
      page++;
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });