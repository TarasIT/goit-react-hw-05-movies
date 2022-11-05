import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { movieInfoRequest } from 'components/MoviesRequest/MoviesRequest';
import { InfoBox, MovieSection } from 'components/MovieInfo/MovieInfo.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieInfo = ({ movieId }) => {
  const [movieInfo, setMoviesInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const movie = await movieInfoRequest(movieId);
        setMoviesInfo(movie);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [movieId]);

  if (!movieInfo) return;

  const { title, vote_average, genres, overview, release_date, poster_path } =
    movieInfo;

  const movieReleaseYear = release_date.slice(0, 4);

  return (
    <MovieSection>
      <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} />
      <InfoBox>
        <h1>
          {title} ({movieReleaseYear})
        </h1>
        <p>Vote average: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres:</h2>
        {genres.map(({ id, name }) => (
          <span key={id}>{name}, </span>
        ))}
      </InfoBox>
    </MovieSection>
  );
};

MovieInfo.propTypes = {
  movieId: PropTypes.string.isRequired,
};
