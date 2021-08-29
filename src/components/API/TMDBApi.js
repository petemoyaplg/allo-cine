const KEY = 'a177bb80c59989ba946d472a3c8c5fce';
export const end = '&page=1&include_adult=false';
const baseUrl = 'https://api.themoviedb.org/3/'
const language = [ 'language=en-US', 'language=fr-FR' ];
export const SEARCH = baseUrl + 'search/movie?api_key=' + KEY + '&' + language[ 1 ] + '&query=';
export const CONFIGURATION = baseUrl + 'configuration?api_key=' + KEY;
export const URL_IMG = baseUrl + 'movie/{movie_id}/images?api_key=' + KEY + '&' + language[ 1 ];
export const URL_GENRE = baseUrl + 'genre/movie/list?api_key=' + KEY + '&' + language[ 1 ];
export const API_URL = baseUrl + 'discover/movie?api_key=' + KEY + '&' + language[ 1 ] + '&sort_by=popularity.desc&&include_video=true&page=';

export const MoviesPopular = baseUrl + 'movie/popular?api_key=' + KEY + '&language=fr-FR&page=';
export const TrendingMovies = baseUrl + 'trending/movie/day?api_key=' + KEY + '&language=fr-FR&page=';
export const searchMoviesByGenre = baseUrl + 'discover/movie?api_key=' + KEY + '&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&without_genres=';
export const SIMILAR_MOVIES = '/similar?api_key=' + KEY + '&language=fr-FR&page='
export const PREFIX_SIMILAR_MOVIES = baseUrl + 'movie/';
export const CREDITS_MOVIES = '/credits?api_key=' + KEY + '&language=fr-FR&page=';
export const PREFIX_CREDITS_MOVIES = baseUrl + 'movie/';

export const TvPopular = 'https://api.themoviedb.org/3/tv/popular?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&page=';
export const TvTopRated = 'https://api.themoviedb.org/3/tv/top_rated?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&page=';
export const TrendingTv = 'https://api.themoviedb.org/3/trending/tv/week?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&page=';
export const searchTvByGenre = baseUrl + 'discover/tv?api_key=' + KEY + '&language=fr-FR&sort_by=popularity.desc&with_genres=';
export const SIMILAR_TV = '/similar?api_key=' + KEY + '&language=fr-FR&page=';
export const PREFIX_SIMILAR_TV = baseUrl + 'tv/';
export const CREDITS_TV = '/credits?api_key=' + KEY + '&language=fr-FR&page=';
export const PREFIX_CREDITS_TV = baseUrl + 'tv/';

export const SECURE_BASE_URL = `https://image.tmdb.org/t/p/`;
export const GENRE_MOVIE = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR';
export const GENRE_TV = 'https://api.themoviedb.org/3/genre/tv/list?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR';
export const MULTI_SEARCH = 'https://api.themoviedb.org/3/search/multi?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&query=';

export const POPULAR_ACTORS = 'https://api.themoviedb.org/3/person/popular?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&page=';
export const TRENDING_ACTORS = 'https://api.themoviedb.org/3/trending/person/day?api_key=a177bb80c59989ba946d472a3c8c5fce&language=fr-FR&page=';
