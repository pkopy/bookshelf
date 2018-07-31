import React, {Component} from 'react'
import DisplayBooks from './DisplayBooks';


class MyReads extends Component {
	render () {
		const { books, onChangeSearchPage } = this.props;
		let curentReading;
		curentReading = books.filter((book) => book.shelf ==='currentlyReading')
		let wantToRead = 
		wantToRead = books.filter((book) => book.shelf ==='wantToRead')
		let read = 
		read = books.filter((book) => book.shelf ==='read')
    	return (
        	<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
          	  <div className="bookshelf">
          			<h2 className="bookshelf-title">Currently Reading</h2>
          			<div className="bookshelf-books">
									<DisplayBooks books={curentReading}/>
          			</div>
          	  </div>
							<div className="bookshelf">
          			<h2 className="bookshelf-title">Want to read</h2>
          			<div className="bookshelf-books">
									<DisplayBooks books={wantToRead}/>
          			</div>
          	  </div>
							<div className="bookshelf">
          			<h2 className="bookshelf-title">Read</h2>
          			<div className="bookshelf-books">
									<DisplayBooks books={read}/>
          			</div>
          	  </div>
          	  <div className="open-search">
              	<a onClick={() => onChangeSearchPage()}>Add a book</a>
              </div>
          	</div>
        )
    }
}

export default MyReads