import React from 'react';
import './Book.css';


function Book(props) {

    return (
        <li >
            <h1 className="Book">{props.title}</h1>
            <img src={props.picLink} />
            <p>Author: {props.author.join(', ')}</p>
        </li>
    )


}

export default Book;