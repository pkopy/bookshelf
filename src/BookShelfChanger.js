import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends Component {

    changeShelf = (e, book) => {
        BooksAPI.update(book, e.target.value)
        console.log(e.target.value)
    }
	render () {
    
    const { book } = this.props;
    console.log(book.shelf)
    	return (
        	<select value={book.shelf} onChange={(e) => this.changeShelf(e, book)}>
                <option value="move" disabled >Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read" >Read</option>
                <option value="none" >None</option>
            </select>
        )
    }
}

export default BookShelfChanger