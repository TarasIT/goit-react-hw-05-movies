import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendMoviesRequest } from 'components/MoviesRequest/MoviesRequest';
import { TrendMovieItem } from './TrendMovies.styled';

export const TrendMovies = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const trendMovies = await trendMoviesRequest();
        setMovies(trendMovies.results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (!movies) return;

  return (
    <>
      {movies.length !== 0 ? (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <TrendMovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </TrendMovieItem>
            );
          })}
        </ul>
      ) : (
        <h2>There are no trend movies today :(</h2>
      )}
    </>
  );
};
