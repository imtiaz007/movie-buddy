import React from 'react';
import {
  HeartIcon,
  XCircleIcon,
  BookmarkIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline';
import { useSetRecoilState } from 'recoil';
import { watchList } from '../State/StateAtoms';

const MovieCard = ({ movie }) => {
  const setWatchList = useSetRecoilState(watchList);

  const addToWatchList = (e) => {
    setWatchList((oldList) => [...oldList, e.currentTarget.value]);
  };
  return (
    <div className='flex max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800'>
      <img
        className='w-1/3'
        alt=''
        src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
      ></img>
      <div className='flex flex-col justify-between w-2/3 px-2 py-3'>
        <div>
          <div className='flex justify-between'>
            <p className='font-medium text-gray-300 text-md sm:text-xl'>
              {movie.original_title
                ? movie.original_title
                : movie.original_name}
            </p>

            <p className='h-7 max-h-7 flex-none bg-gray-400 rounded-md p-1 text-sm font-medium text-gray-500'>
              {movie.vote_average}
            </p>
          </div>
          <p className='text-sm line-clamp-4 text-gray-500 mt-1'>
            {movie.overview}
          </p>
        </div>
        <div className='flex justify-center mt-5'>
          <div className='space-x-7'>
            <button type='button' value={movie.id} className=''>
              <BookmarkIcon className='h-7 w-7 text-purple-500' />
            </button>
            <button type='button' value={movie.id} className=''>
              <XCircleIcon className='h-7 w-7 text-gray-500' />
            </button>
            <button
              type='button'
              className=''
              value={movie.id}
              onClick={(e) => addToWatchList(e)}
            >
              <HeartIcon className='h-7 w-7 text-red-500' />
            </button>
            <button
              type='button'
              className=''
              value={movie.id}
              onClick={(e) => addToWatchList(e)}
            >
              <CheckCircleIcon className='h-7 w-7 text-green-500' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
