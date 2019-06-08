import React, { Component } from 'react'

export default class BookCard extends Component {
    handleClick = (e) => {
        this.props.handleDele()
    }
    render() {
        // console.log(this.props.book)
        const {book_author, book_title, byline, summary, url, publication_dt} = this.props.book

        return (
            <div className="ui card" style={{width: '300px', height: '300px', padding: '5px'}}>
                <h1>{book_title}</h1>
                <h4>Author: {book_author}</h4>
                <p>{summary}</p>
                <p>Date: {publication_dt}</p>
                <p>By Line?: {byline}</p>
                <a href={url}>More Info</a>
                <div><button onClick={this.handleClick}className="ui negative button">Delete</button></div>
            </div>
        )
    }
}
