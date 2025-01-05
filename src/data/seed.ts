import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
const API_KEY = process.env.READ_API_TMDB;

async function fetchGenres() {
  const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  });
  return response.data.genres;
}

async function fetchMoviesByGenre(genreId: number, page: number) {
  const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    },
    params: {
      with_genres: genreId,
      sort_by: 'popularity.desc',
      page: page
    }
  });
  return response.data;
}

async function main() {
  const genres = await fetchGenres();

  // Insert genres into the database
  for (const genre of genres) {
    await prisma.genre.upsert({
      where: { tmdbId: genre.id },
      update: {},
      create: {
        tmdbId: genre.id,
        name: genre.name,
      },
    });
  }

  // Insert movies into the database and associate them with genres
  for (const genre of genres) {
    let page = 1;
    const maxPages = 500; // Limitar el número de páginas a 500

    while (page <= maxPages) {
      const data = await fetchMoviesByGenre(genre.id, page);
      const movies = data.results;

      for (const movie of movies) {
        const existingMovie = await prisma.movie.findUnique({
          where: { tmdbId: movie.id },
        });

        if (!existingMovie) {
          const genreConnections = movie.genre_ids.map((genreId: number) => ({
            where: { tmdbId: genreId },
            create: { tmdbId: genreId, name: '' }, // Name will be updated if genre already exists
          }));

          // Verificar si release_date es una fecha válida
          const releaseDate = movie.release_date ? new Date(movie.release_date) : new Date('1970-01-01');

          await prisma.movie.create({
            data: {
              tmdbId: movie.id,
              adult: movie.adult,
              backdropPath: movie.backdrop_path,
              originalLanguage: movie.original_language,
              originalTitle: movie.original_title,
              overview: movie.overview,
              popularity: movie.popularity,
              posterPath: movie.poster_path,
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