const TREND_MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?';
const SEARCH_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie?';
const MOVIE_INFO_URL = 'https://api.themoviedb.org/3/movie/';
const KEY = '308ba57d7f6135bbdbfbab5697860db3';

export const trendMoviesRequest = async () => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await fetch(`${TREND_MOVIES_URL}${searchParams}`);
  if (!response.ok) {
    return Promise.reject(
      new Error(`Something went wrong with trend movies :(`)
    );
  }
  return response.json();
};

export const searchMoviesByKeyWord = async movie => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    query: movie,
  });
  const response = await fetch(`${SEARCH_MOVIES_URL}${searchParams}`);
  if (!response.ok) {
    return Promise.reject(
      new Error(`There are no movies for query '${movie}'!`)
    );
  }
  return response.json();
};

export const movieInfoRequest = async id => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await fetch(`${MOVIE_INFO_URL}${id}?${searchParams}`);
  if (!response.ok) {
    return Promise.reject(
      new Error(`There are no information about the movie!`)
    );
  }
  return response.json();
};

export const movieCastRequest = async id => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await fetch(
    `${MOVIE_INFO_URL}${id}/credits?${searchParams}`
  );
  if (!response.ok) {
    return Promise.reject(new Error(`There is no cast of the movie!`));
  }
  return response.json();
};

export const movieReviewsRequest = async id => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await fetch(
    `${MOVIE_INFO_URL}${id}/reviews?${searchParams}`
  );
  if (!response.ok) {
    return Promise.reject(new Error(`There are no reviews of the movie!`));
  }
  return response.json();
};
