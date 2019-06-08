import './App.css';
import React, { Component } from 'react'
import BookContainer from './BookContainer'
import Filter from './Filter'
import SearchBar from './SearchBar'

const API_KEY = `QLLOw7iVMeeFLxRZa6LPo2Wgfkc8gntC`
const URL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${API_KEY}`


export default class App extends Component {
  
  state = {
    books: [],
    originalArray: []
  }

  originalArray = () => {
    const originalArray = this.state.books
    return originalArray
  }

  componentDidMount = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      books: data.results,
      originalArray: data.results
    }))
  }

  handleFilter = (input) => {
    
    // console.log(this.state.books)
    // if (input){
      let filter = this.state.originalArray.filter(book => {
      return book.book_title.toLowerCase().includes(input.toLowerCase())
      })
      this.setState({
        books: filter
      })
    // }
    // else{
    //   this.setState({
    //     books: this.state.originalArray
    //   })
    // }
  }

  // handleDele = () => {
  //   //finish
  //     let filter = this.state.originalArray.filter(book => {
  //     return book.book_title.toLowerCase().includes(newArr.booktitle.toLowerCase()) && book.byline.toLowerCase().includes(newArr.byline[0].toLowerCase());
  //     // return book.byline.toLowerCase().includes(newArr.byline.toLowerCase())
  //     })
  //     this.setState({
  //       books: filter
  //     })
  // }

  handleSubmit = (newArr) => {
    // console.log(newArr.byline)
      let filter = this.state.originalArray.filter(book => {
      return book.book_title.toLowerCase().includes(newArr.booktitle.toLowerCase()) && book.byline.toLowerCase().includes(newArr.byline[0].toLowerCase());
      // return book.byline.toLowerCase().includes(newArr.byline.toLowerCase())
      })
      this.setState({
        books: filter
      })
      // console.log(filter)
  }
  render() {
    console.log(this.state.books)
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit}/>
        <Filter handleFilter={this.handleFilter}/>
        <BookContainer books= {this.state.books} handleDele={this.handleDele}/>
      </div>
    )
  }
}

