import React, { Component } from 'react';
import './Booklist.css';
import Book from './Book'


class Booklist extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            books: "nothing yet"
        };
    }
    // let url = "https://www.googleapis.com/books/v1/volumes?q=" + props.query + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw"
    // componentDidMount() {
    // fetch(this.props.url)
    //     .then(res => {
    //         if (!res.ok) {
    //             throw new Error('Something went wrong, please try again later');
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         const output = Object.data.items.map(overview => {
    //             // console.log(overview)
    //             // let book = overview.volumeInfo;
    //             // console.log(book);
    //             // console.log(
    //             return (<Book
    //                 title={overview.volumeInfo.title}
    //                 author={overview.volumeInfo.authors}
    //                 price={overview.volumeInfo.price} />

    //             )
    //         })
    //         console.log(output)
    //         this.setState({ books: output })
    //     })

    //     .catch(err => {
    //         // this.setState({
    //         //     error: err.message
    //         // });
    //         alert(err)
    //     });
    // }

    componentDidMount() {
        console.log("mounting")
        if (this.props.submit === true) {
            fetch(this.props.url)
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw new Error('Something went wrong, please try again later');
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data.items);
                    const output = data.items.map(overview => {
                        // console.log(overview)
                        //     // let book = overview.volumeInfo;
                        //     // console.log(book);
                        //     // console.log(
                        return (<Book
                            title={overview.volumeInfo.title}
                            author={overview.volumeInfo.authors}
                            picLink={overview.volumeInfo.thumbnail}
                        // price={overview.volumeInfo.price} 
                        />

                        )
                    })
                    // console.log(output)
                    this.setState({ books: output })
                })

                .catch(err => {
                    // this.setState({
                    //     error: err.message
                    // });
                    alert(err)
                });
        }
    }

    render() {
        // if (this.props.submit == true) {
        //     fetch(this.props.url)
        //         .then(res => {
        //             console.log(res)
        //             if (!res.ok) {
        //                 throw new Error('Something went wrong, please try again later');
        //             }
        //             return res.json();
        //         })
        //         .then(data => {
        //             // console.log(data.items);
        //             const output = data.items.map(overview => {
        //                 // console.log(overview)
        //                 //     // let book = overview.volumeInfo;
        //                 //     // console.log(book);
        //                 //     // console.log(
        //                 return (<Book
        //                     title={overview.volumeInfo.title}
        //                     author={overview.volumeInfo.authors}
        //                     picLink={overview.volumeInfo.thumbnail}
        //                 // price={overview.volumeInfo.price} 
        //                 />

        //                 )
        //             })
        //             // console.log(output)
        //             this.setState({ books: output })
        //         })

        //         .catch(err => {
        //             // this.setState({
        //             //     error: err.message
        //             // });
        //             alert(err)
        //         });
        // }
        // console.log(this.state.books)
        return (
            <ul>
                <h2>here</h2>
                {/* <Book /> */}
                {this.state.books}
            </ul >

        )
    }

}

export default Booklist;