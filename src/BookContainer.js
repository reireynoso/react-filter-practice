import React, { Component } from 'react'
import BookCard from './BookCard'

export default class BookContainer extends Component {
    render() {
        // console.log(this.props.books)
        return (
            <div className="ui container" id="cont">

               {
                   this.props.books.map(book => {
                       return <BookCard key={book.id} book={book} handleDele = {this.props.handleDele}/>
                   })
               } 
               
            </div>
        )
    }
}
