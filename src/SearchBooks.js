import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookShelfChanger from './BookShelfChanger'


class SearchBooks extends Component {
state = {
  query: ''
}
updateQuery = (query) =>{ 
  this.setState({query: query.trim()})
}
  
render() {
  	const { books, onChangeSearchPage } = this.props;
	const { query } = this.state;

	let showingBooks
    if(query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
    }else{
      showingBooks = books;
    }

	showingBooks.sort(sortBy('title'))
  
	
   return(
   	<div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => (onChangeSearchPage())}>Close</a>
              <div className="search-books-input-wrapper">
                {
                  
                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
					type="text" 
					placeholder="Search by title or author"
					
                    value={this.state.query}
					onChange={(event) => this.updateQuery(event.target.value)}
					/>
				
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{showingBooks.map((book) => (
                   <li key={book.id}>
                   <div className="book">
				   		<div className="book-top">
							<div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`, width: '128px', height: '188px'}}> </div>
							<div className="book-shelf-changer">
								<BookShelfChanger />
							</div>
						</div>
						<div className="book-title" >{book.title}</div>
						<div className="book-authors">
							{book.authors.map((author, index) => (
								<p key={index}>{author}</p>
							))}
						</div>

					</div>
					
                   </li>) )}
				
			  </ol>
            </div>
          </div>
   )
}
}
export default SearchBooks
