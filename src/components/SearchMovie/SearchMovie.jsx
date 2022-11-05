import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyWord } from 'components/MoviesRequest/MoviesRequest';
import { FormInput, MovieItem, SubmitBtn } from './SearchMovie.styled';

export const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const getMoviesByRequest = async movie => {
    try {
      const obtainedMovies = await searchMoviesByKeyWord(movie);
      setMovies([...obtainedMovies.results]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const movieQuery = e.target.elements.query.value;
    if (movieQuery === '') return;
    setSearchParams({ query: movieQuery });
    getMoviesByRequest(movieQuery);
    e.target.reset();
  };

  if (movies.length === 0 && query !== '') getMoviesByRequest(query);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput name="query" type="text" />
        <SubmitBtn type="Submit">Search</SubmitBtn>
      </form>

      {movies.length !== 0 && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <MovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </MovieItem>
            );
          })}
        </ul>
      )}

      {movies.length === 0 && query !== '' && (
        <h1>There are no movies with query {`"${query}"`} :(</h1>
      )}
    </>
  );
};
