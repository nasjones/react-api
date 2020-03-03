import React, { Component } from 'react'
import './Search.css'

// class Search extends Component {
function Search(props) {

    // render() {
    // console.log(props)
    return (
        <div className="searchBar">
            <form onSubmit={props.qClick}>
                <label htmlFor="book-box">Search:</label>
                <input type="text" name="book-box" onChange={props.sChange} />
                <button type="submit" value="">Search</button>
            </form>

        </div>
    )
    // }

}





export default Search;