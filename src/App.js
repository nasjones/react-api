import React, { Component } from 'react';
import Search from './Search'
import './App.css';
import Filter from './Filter'
import Booklist from './Booklist'

class App extends Component {
  state = {
    query: "",
    print: "",
    bookType: "",
    submit: false,
    books: "",
    url: "",
    error: ""
  }

  typeChange = e => {
    let output = ""
    const val = e.target.value
    if (val === "")
      this.setState({ bookType: output })
    else {
      output = "&filter=" + val
      this.setState({ bookType: output })
    }
    this.setState({ url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.query + this.state.print + output + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw" })
  }

  printChange = e => {
    let output = ""
    const val = e.target.value
    if (val === "all")
      this.setState({ print: output })
    else {
      output = "&printType=" + val
      this.setState({ print: output })
    }

    this.setState({ url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.query + output + this.state.bookType + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw" })
  }

  searchChange = e => {
    let output = e.target.value.split(' ').join('+');
    this.setState({ query: output })
    this.setState({ url: "https://www.googleapis.com/books/v1/volumes?q=" + output + this.state.print + this.state.bookType + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw" })
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state.url)
    fetch(this.state.url)
      .then(response => {
        console.log(response.ok)
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return (<Booklist
          books={data}
        />)
      })
      .then(output => {
        console.log(output)
        this.setState({ books: output })
      })
      .catch(err => {
        return (err)
      })
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search
          sChange={this.searchChange}
          qClick={this.submit} />

        <Filter
          tChange={this.typeChange}
          pChange={this.printChange} />

        {this.state.books}
      </div>
    );


  }
}

export default App;
