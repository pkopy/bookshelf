import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookShelfChanger extends Component {

    changeShelf = (e, book) => {
        BooksAPI.update(book, e.target.value)
        console.log(e.target.value)
        
    }
	render () {
    
    const { book , update} = this.props;
    console.log(book.shelf)
    	return (
            <div>
        	<select value={book.shelf} onChange={(e) => {this.changeShelf(e, book); update}}>
                <option value="move" disabled >Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read" >Read</option>
                <option value="none" >None</option>
            </select>
                
            </div>
        )
    }
}

export default BookShelfChanger