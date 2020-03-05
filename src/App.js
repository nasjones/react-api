import React, { Component } from 'react';
import Search from './Search'
import './App.css';
import Filter from './Filter'
import Booklist from './Booklist'

class App extends Component {
  state = {
    query: "",
    print: "All",
    bookType: "",
    submit: false,
    books: "nothing",
    url: "",
    error: ""
  }

  typeChange = e => {
    this.setState({ bookType: e.target.value })
  }

  printChange = e => {
    this.setState({ print: e.target.value })
  }

  searchChange = e => {
    let output = e.target.value.split(' ').join('+');
    this.setState({ query: output })
  }



  submit = e => {
    e.preventDefault();
    console.log(this.state.query)
    this.setState({ url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.query + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw" })
    this.setState({ submit: true })
    let out = <Booklist
      query={this.state.query}
      print={this.state.print}
      bookType={this.state.bookType}
      url={this.state.url}
      submit={this.state.submit}
    />
    console.log(out)
    this.setState({
      books: out
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
