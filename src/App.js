import React from 'react'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // changeShowSearchePage = () => this.setState({ showSearchPage: false })

  changeShowSearchePage = () => {
    if (this.state.showSearchPage) {
      this.setState({ showSearchPage: false })
    } else {
      this.setState({ showSearchPage: true })
    }
  }



  render() {
    
    

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route patch='/search' render={() => (
            <SearchBooks 
              books={this.state.books}
              onChangeSearchPage={this.changeShowSearchePage}
            />

          )}
          />
        ) : (
          <Route exact path='/' render={() => (
            <MyReads
              books={this.state.books}
              read={this.state.books.filter((book) => book.shelf ==='read')}
              update={this.componentDidMount}
              onChangeSearchPage={this.changeShowSearchePage}
              
            />
          )}
          />
          )
        }

      </div>
    )
  }
}

export default BooksApp
