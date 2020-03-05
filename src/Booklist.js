import React, { Component } from 'react';
import './Booklist.css';
import Book from './Book'


class Booklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: "nothing yet"

        };
    }

    componentDidMount() {

        fetch(this.props.url)
            .then(response => {
                console.log(response.ok)
                if (!response.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                return (data.items.map(overview => {
                    console.log(overview.volumeInfo.thumbnail)
                    return (<Book
                        title={overview.volumeInfo.title}
                        author={overview.volumeInfo.authors}
                        picLink={overview.volumeInfo.imageLinks.thumbnail}
                        key={overview.id}
                    />
                    )

                })
                )


            }).then(output => {
                console.log(output)
                this.setState({ books: output })
            })
            .catch(err => {
                return (err)
            })

    }

    render() {
        console.log(this.state.books)

        return (
            <ul key="bookList">
                <h2>here</h2>
                {this.state.books}
            </ul >

        )
    }

}



async function getBooks(url) {

    let output = await fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return (data.items.map(overview => {
                console.log(overview.volumeInfo.thumbnail)
                return (<Book
                    title={overview.volumeInfo.title}
                    author={overview.volumeInfo.authors}
                    picLink={overview.volumeInfo.imageLinks.thumbnail}
                    key={overview.id}

                />
                )

            }
            )
            )

        })
        .catch(err => {

            return (err)
        });
    console.log(output)
    return output;
    // }
}


export default Booklist;