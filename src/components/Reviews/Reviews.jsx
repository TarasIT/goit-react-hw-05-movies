import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { movieReviewsRequest } from 'components/MoviesRequest/MoviesRequest';

const Reviews = ({ id }) => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
  id = movieId;

  useEffect(() => {
    (async () => {
      try {
        const reviews = await movieReviewsRequest(movieId);
        setMovieReviews(reviews.results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [movieId]);

  if (!movieReviews) return;

  return (
    <>
      {movieReviews.length !== 0 ? (
        movieReviews.map(({ author, id, content }) => {
          return (
            <div key={id}>
              <h3>{author}:</h3>
              <p>"{content}"</p>
            </div>
          );
        })
      ) : (
        <h2>There are no reviews of the movie yet :(</h2>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
