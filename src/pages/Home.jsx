import { useState, useEffect } from 'react';
import SearchBox from '../components/Search';
import MovieCard from '../components/MovieCard';
import axios from '../helpers/axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term !== '') {
      axios
        .get(
          `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false&append_to_response=watch/providers`
        )
        .then(({ data }) => {
          // console.log(data);
          setMovies(data.results);
          // setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&append_to_response=watch/providers`
        )
        .then(({ data }) => {
          // console.log(data);
          setMovies(data.results);
          // setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [term]);

  return (
    <div>
      <SearchBox searchText={(text) => setTerm(text)} />
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:grid-cols-1'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
