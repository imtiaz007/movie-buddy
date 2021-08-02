import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import MovieCard from '../components/MovieCard';
import axios from '../helpers/axios';
import { watchList } from '../State/StateAtoms';

const Matches = () => {
  const movies = useRecoilValue(watchList);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(movies);
    for (let i = 0; i < movies.length; i++) {
      axios
        .get(
          `/movie/${parseInt(movies[i])}?api_key=${
            process.env.REACT_APP_TMDB_API_KEY
          }&language=en-US&append_to_response=watch/providers`
        )
        .then(({ data }) => {
          console.log(data);
          setMovieList((oldList) => [...oldList, data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [movies]);

  return (
    <div>
      <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
