import React from 'react'
import './Search.css'
const Search = ({ onInputChange}) => {
    return (
        <>
            <div className="search-container">
                <input
                    onChange={(event) => onInputChange(event.target.value)}
                    type="text"
                    placeholder="type keywords"
                    className="search-input"
                />
            </div>
        </>
    )
}

export default Search
