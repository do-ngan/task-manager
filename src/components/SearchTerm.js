import React from 'react';
import { setSearchTerm, clearSearchTerm } from '../slices/searchTermSlice'; 
import searchIcon from '../img/search.svg'
import clearIcon from '../img/x-lg.svg'

const SearchTerm = ({ searchTerm, dispatch }) => {
    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };
    const handleClear = () => {
        dispatch(clearSearchTerm());
    };

    return (
        // <div className="input-group mt-4 mb-3" style={{'width': '500px', 'margin': 'auto'}}>
        //     <span className="input-group-text" id="searchIcon"><i class="bi bi-search"></i></span>
        //     <input type="text" className="form-control" placeholder="Search task" aria-label="searchTerm" aria-describedby="basic-addon1"/>
        // </div>
          
        <div className="mt-3 mb-3" id="search-container">
            <img id="search-icon" alt="" src={searchIcon} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search task"
            />
            {searchTerm.length > 0 && (
            <button
                onClick={handleClear}
                type="button"
                id="search-clear-button"
            >
                <img src={clearIcon} alt="" />
            </button>
            )}
        </div>
    );
};

export default SearchTerm;