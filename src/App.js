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
    bookList: "",
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

    fetch(this.state.url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(data => {
        let list = <Booklist
          bookObj={data.items}
        />

        console.log(list)

        this.setState({
          bookList: list
        })

        console.log(this.state.bookList)
        return (data.items.map(overview => {

          console.log("boi")
          console.log(overview.volumeInfo.thumbnail)

        })
        )
      })
      .catch(err => {

        alert(err)
      });

  }


  render() {
    return (
      <div className="App" key="main">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>

        <Search
          sChange={this.searchChange}
          qClick={this.submit} />

        <Filter
          tChange={this.typeChange}
          pChange={this.printChange} />

        {this.state.bookList}
      </div>
    );
  }
}

export default App;
