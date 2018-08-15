import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="search-box"
                type="search" 
                placeholder="Search robots" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;