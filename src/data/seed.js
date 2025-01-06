"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var axios_1 = require("axios");
var cloudinaryService_1 = require("../data/services/cloudinaryService");
var urlComplete_1 = require("../lib/urlComplete");
var dotenv = require("dotenv");
dotenv.config();
var prisma = new client_1.PrismaClient();
var cloudinaryService = new cloudinaryService_1.default();
var API_KEY = process.env.READ_API_TMDB;
function cleanDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Limpiando base de datos...');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, prisma.movie.deleteMany()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.genre.deleteMany()];
                case 3:
                    _a.sent();
                    console.log('Base de datos limpiada exitosamente');
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error limpiando la base de datos:', error_1);
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function fetchWithRetry(url_1, config_1) {
    return __awaiter(this, arguments, void 0, function (url, config, retries, delay) {
        var i, error_2;
        if (retries === void 0) { retries = 3; }
        if (delay === void 0) { delay = 1000; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < retries)) return [3 /*break*/, 7];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, (0, axios_1.default)(__assign(__assign({}, config), { url: url, timeout: 5000 }))];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    error_2 = _a.sent();
                    if (i === retries - 1)
                        throw error_2;
                    console.log("Reintentando petici\u00F3n ".concat(i + 1, "/").concat(retries));
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay); })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 6:
                    i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function fetchGenres() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchWithRetry('https://api.themoviedb.org/3/genre/movie/list', {
                        headers: {
                            Authorization: "Bearer ".concat(API_KEY)
                        }
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data.genres];
            }
        });
    });
}
function fetchMoviesByGenre(genreId, page) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchWithRetry('https://api.themoviedb.org/3/discover/movie', {
                            headers: {
                                Authorization: "Bearer ".concat(API_KEY)
                            },
                            params: {
                                with_genres: genreId,
                                sort_by: 'popularity.desc',
                                page: page
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error fetching page ".concat(page, " for genre ").concat(genreId, ":"));
                    return [2 /*return*/, { results: [] }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function uploadMovieImages(backdropPath, posterPath) {
    return __awaiter(this, void 0, void 0, function () {
        var backdropUrl, posterUrl, fullBackdropPath, fullPosterPath, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    backdropUrl = null;
                    posterUrl = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!backdropPath) return [3 /*break*/, 3];
                    fullBackdropPath = (0, urlComplete_1.default)(backdropPath);
                    return [4 /*yield*/, cloudinaryService.uploadImage(fullBackdropPath)];
                case 2:
                    backdropUrl = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!posterPath) return [3 /*break*/, 5];
                    fullPosterPath = (0, urlComplete_1.default)(posterPath);
                    return [4 /*yield*/, cloudinaryService.uploadImage(fullPosterPath)];
                case 4:
                    posterUrl = _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, { backdropUrl: backdropUrl, posterUrl: posterUrl }];
                case 6:
                    error_4 = _a.sent();
                    console.error('Error uploading images:', error_4);
                    return [2 /*return*/, { backdropUrl: null, posterUrl: null }];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var genres, _i, genres_1, genre, page, maxPages, data, movies, _a, movies_1, movie, existingMovie, _b, backdropUrl, posterUrl, genreConnections, releaseDate;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, cleanDatabase()];
                case 1:
                    _c.sent();
                    console.log('Iniciando proceso de seed...');
                    return [4 /*yield*/, fetchGenres()];
                case 2:
                    genres = _c.sent();
                    _i = 0, genres_1 = genres;
                    _c.label = 3;
                case 3:
                    if (!(_i < genres_1.length)) return [3 /*break*/, 13];
                    genre = genres_1[_i];
                    page = 1;
                    maxPages = 300;
                    _c.label = 4;
                case 4:
                    if (!(page <= maxPages)) return [3 /*break*/, 12];
                    return [4 /*yield*/, fetchMoviesByGenre(genre.id, page)];
                case 5:
                    data = _c.sent();
                    movies = data.results;
                    _a = 0, movies_1 = movies;
                    _c.label = 6;
                case 6:
                    if (!(_a < movies_1.length)) return [3 /*break*/, 11];
                    movie = movies_1[_a];
                    return [4 /*yield*/, prisma.movie.findUnique({
                            where: { tmdbId: movie.id },
                        })];
                case 7:
                    existingMovie = _c.sent();
                    if (!!existingMovie) return [3 /*break*/, 10];
                    console.log("Procesando pel\u00EDcula: ".concat(movie.title));
                    return [4 /*yield*/, uploadMovieImages(movie.backdrop_path, movie.poster_path)];
                case 8:
                    _b = _c.sent(), backdropUrl = _b.backdropUrl, posterUrl = _b.posterUrl;
                    genreConnections = movie.genre_ids.map(function (genreId) { return ({
                        where: { tmdbId: genreId },
                        create: { tmdbId: genreId, name: '' },
                    }); });
                    releaseDate = movie.release_date ? new Date(movie.release_date) : new Date('1970-01-01');
                    return [4 /*yield*/, prisma.movie.create({
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
                        })];
                case 9:
                    _c.sent();
                    console.log("Pel\u00EDcula guardada: ".concat(movie.title));
                    _c.label = 10;
                case 10:
                    _a++;
                    return [3 /*break*/, 6];
                case 11:
                    page++;
                    return [3 /*break*/, 4];
                case 12:
                    _i++;
                    return [3 /*break*/, 3];
                case 13: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
