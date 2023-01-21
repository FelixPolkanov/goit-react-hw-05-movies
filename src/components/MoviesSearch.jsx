import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonWrapper } from './MovieSearch.styled';

const MoviesSearch = ({query}) => {
  const setSearchParams = useSearchParams()[1];
  const [value, setValue] = useState(query ?? '');
  
  const handleSubmit = e => {
    e.preventDefault();
    const [input] = e.target;
    setSearchParams({ movie_search: input.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <ButtonWrapper type="submit">Search</ButtonWrapper>
      </form>
    </>
  );
};

export default MoviesSearch;