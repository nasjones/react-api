import React, { Component } from 'react';
import './Booklist.css';
import Book from './Book'


function Booklist(props) {
    // constructor(props) {
    //     super(props);
    //     // console.log(props)
    //     this.state = {
    //         books: "nothing yet"
    //     };
    // }
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


    // componentDidMount() {

    // getBooks(this.props.url).then(response => {
    // this.setState({ books: response })
    // })
    // setTimeout(() => {
    //     console.log(this.state.books)

    // }, 2000)


    // if (this.props.submit === true) {
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
    //     // }
    // }

    // render() {

    let output = props.bookObj.map(overview => {
        return (<Book
            title={overview.volumeInfo.title}
            author={overview.volumeInfo.authors}
            picLink={overview.volumeInfo.imageLinks.thumbnail}
            key={overview.id} />)
    })

    console.log(output)
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
        <ul key="bookList" >
            <h2>here</h2>
            {/* <Book /> */}
            {/* {this.state.books} */}
            {output}
        </ul >

    )
}


// }



async function getBooks(query) {

    let output = await fetch(query)
        .then(response => {
            // console.log(res)
            if (!response.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.items);
            return (data.items.map(overview => {
                // console.log(overview)
                //     // let book = overview.volumeInfo;
                //     // console.log(book);
                console.log(overview.volumeInfo.thumbnail)
                return (<Book
                    title={overview.volumeInfo.title}
                    author={overview.volumeInfo.authors}
                    picLink={overview.volumeInfo.imageLinks.thumbnail}
                    key={overview.id}
                // price={overview.saleInfo.retailPrice}
                />
                )

            }
            )
            )
            // console.log(output)
            // this.setState({ books: output })
        })
        .catch(err => {
            // this.setState({
            //     error: err.message
            // });
            alert(err)
        });
    // console.log(output)
    return output;
    // }
}


export default Booklist;