import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {

    changeSelection(value) {
        if (value === "None") {
            this.props.changeHandler(null);
        } else {

            const country = this.props.countries.find(country => country.name === value);
            this.props.changeHandler(country);
        }
    }

    render() {
        return (
            <div className="filter-bar">
                <label>Print Type:</label>
                <select>
                    <option value="None">
                        All
                    </option>
                </select>
                <label>Book Type:</label>
                <select>
                    <option value="None">
                        No Filter
                    </option>
                </select>
            </div>
        )
    }
}

export default Filter;