import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Link, MovieBox, Title } from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <MovieBox>
      <Link to={backLink}>Go back</Link>
      <MovieInfo movieId={movieId} />

      <div>
        <Title>Additional information</Title>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </MovieBox>
  );
};

export default MovieDetails;
