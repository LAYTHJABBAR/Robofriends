import React from "react";

const Search = ({searchField, searchChange}) => {
  return (
    <div>
      <label for="search" className="b fw9 f2 ">
        search
      </label>
      <input
        type="search"
        className="tc pa3 b--green bg-lightest-blue shadow-4"
        name="search"
        placeholder="Search rebo"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default Search;
