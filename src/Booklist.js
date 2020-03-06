import React, { Component } from 'react';
import './Booklist.css';
import Book from './Book'


function Booklist(props) {

    if (props.books.length <= 0) {
        return (
            <h2>
                Sorry Your search yielded no results
            </h2>
        )
    }

    let output = props.books.items.map(overview => {
        return (<Book
            title={overview.volumeInfo.title}
            author={overview.volumeInfo.authors}
            picLink={overview.volumeInfo.imageLinks.thumbnail}
            key={overview.id}
        />)
    })

    return (
        <ul key="bookList">
            {output}
        </ul >
    )
}


export default Booklist;