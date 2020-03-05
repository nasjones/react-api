import React from 'react'
import './Search.css'


function Search(props) {

    return (
        <div className="searchBar">
            <form onSubmit={props.qClick}>
                <label htmlFor="book-box">Search:</label>
                <input type="text" name="book-box" onChange={props.sChange} />
                <button type="submit" value="">Search</button>
            </form>

        </div>
    )

}





export default Search;