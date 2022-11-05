import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { movieCastRequest } from 'components/MoviesRequest/MoviesRequest';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = ({ id }) => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();
  id = movieId;

  useEffect(() => {
    (async () => {
      try {
        const actors = await movieCastRequest(movieId);
        setMovieCast(actors.cast);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [movieId]);

  if (!movieCast) return;

  return (
    <ul>
      {movieCast.map(({ name, id, character, profile_path }) => {
        return (
          <li key={id}>
            <img src={`${BASE_IMG_URL}${profile_path}`} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
