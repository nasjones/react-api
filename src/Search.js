import React, { Component } from 'react'
import './Search.css'

class Search extends Component {

    render() {
        return (
            <div className="searchBar">
                <form>
                    <label htmlFor="book-box">Search:</label>
                    <input type="text" name="book-box" />
                    <button type="submit">Search</button>
                </form>

            </div>
        )
    }

}





export default Search