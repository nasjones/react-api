import React from 'react';
import './Book.css';


function Book(props) {
    let author = (props.author !== undefined) ? props.author : ["No author listed"]
    return (
        <li >
            <h1 className="Book">{props.title}</h1>
            <img src={props.picLink} alt={props.title + " cover"} />
            <p>Author: {author.join(', ')}</p>
        </li>
    )
}

export default Book;