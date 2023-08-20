import React, { useState } from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  



  return (
    <div className="Filter">
      <input type="text" name="search" placeholder={search}  onChange={onSearchChange}/>
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
