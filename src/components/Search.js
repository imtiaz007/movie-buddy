import React, { useState } from 'react';

const SearchBox = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className='max-w-sm overflow-hidden my-5 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border border-b-4 border-r-3 rounded-2xl py-2'>
          <input
            onChange={(e) => setText(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2  leading-tight focus:outline-none focus:ring-0'
            type='text'
            placeholder='Movie/Tv Show/Actor/Director'
          />
          <button
            className='flex-shrink-0 bg-purple-500  text-md  text-gray-200 py-1 px-2 mr-2 rounded-xl'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
