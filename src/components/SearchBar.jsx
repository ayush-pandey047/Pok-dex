import React from "react";

const SearchBar = ({searchTerm, setSearchTerm}) => {

    return(
        <input type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
        />
    )
}
export default SearchBar;