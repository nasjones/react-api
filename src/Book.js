import React, { Component } from 'react';
import './Book.css';


function Book(props) {

    // render() {
    return (
        <li>
            <h1 className="Book">{props.title}</h1>
            <img src={props.picLink} />
            <p>Author: {props.author}</p>
        </li>
    )
    // }

}

export default Book;