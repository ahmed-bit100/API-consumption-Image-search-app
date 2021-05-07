import React from 'react';
import './search.css';

const Search = ({searchValue, handleSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="imageSearch">
      <form className="imageSearch__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search for images..."
        />
      </form>
    </div>
  );
};

export default Search;
