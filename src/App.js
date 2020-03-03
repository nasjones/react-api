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
    // const newVal = e.target.value;
    // this.setState({ query: newVal });
    e.preventDefault();
    console.log(this.state.query)
    this.setState({ url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.query + "&key=AIzaSyDCfnHQtyf5xVMfBjJRAfQhOmh91u26eGw" })
    if (this.state.submit === true)
      this.setState({ submit: false })
    this.setState({ submit: true })
    // const list = <Booklist
    //   query={this.state.query}
    //   print={this.state.print}
    //   bookType={this.state.bookType}
    // />
    // console.log(list)
    // setTimeout(() => {
    //   this.setState({ books: list })
    //   console.log(this.state.books)
    //   this.render();
    // }, 2000);
    // const displayList = <Booklist
    //   query={this.state.query}
    //   print={this.state.print}
    //   bookType={this.state.bookType}
    //   url={this.state.url}
    // />

  }


  render() {
    if (this.state.submit === false)
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
          {/* <Booklist
            query={this.state.query}
            print={this.state.print}
            bookType={this.state.bookType}
            url={this.state.url}
            submit={this.state.submit}
          /> */}
          {/* {this.state.books} */}
        </div>
      );

    else
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
          <Booklist
            query={this.state.query}
            print={this.state.print}
            bookType={this.state.bookType}
            url={this.state.url}
            submit={this.state.submit}
          />
          {/* {this.state.books} */}
        </div>
      );
  }
}

export default App;
