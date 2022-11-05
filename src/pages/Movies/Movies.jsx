import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { Link } from './Movies.styled';

const Movies = () => {
  return (
    <main>
      <Link to={'/'}>Go back to Homepage</Link>
      <SearchMovie />
    </main>
  );
};

export default Movies;
