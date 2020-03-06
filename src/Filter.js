import React from 'react'
import './Filter.css'

function Filter(props) {

    return (
        <div className="filter-bar">
            <label>Print Type:</label>

            <select onChange={props.pChange}>
                <option value="">
                    All
                    </option>
                <option value="books">
                    Books
                    </option>
                <option value="magazines">
                    Magazine
                    </option>
            </select>

            <label>Book Type:</label>

            <select onChange={props.tChange}>
                <option value="">
                    No Filter
                    </option>
                <option value="partial">
                    Partial
                    </option>
                <option value="full">
                    Full
                    </option>
                <option value="free-ebooks">
                    Free-ebooks
                    </option>
                <option value="paid-ebooks">
                    Paid-ebooks
                    </option>
                <option value="ebooks">
                    Ebooks
                    </option>

            </select>
        </div>
    )
}


export default Filter;