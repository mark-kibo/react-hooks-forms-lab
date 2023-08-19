import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [searchInput, setSearchInput]= useState("")

  function handleInput(e){
    setSearchInput(e.target.value)
    onCategoryChange(e)
    setSearchInput("")
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..."  onChange={handleInput}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        {/* {searchInput ? <option value="">{searchInput}</option> : ""} */}
        {/* <option value={searchInput}>{searchInput}</option> */}
      </select>
    </div>
  );
}

export default Filter;
