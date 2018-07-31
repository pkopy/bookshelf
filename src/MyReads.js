import React, {Component} from 'react'
import DisplayBooks from './DisplayBooks';


class MyReads extends Component {
	state ={
		curentReading:[],
		wantToRead : [],
		read: []
	}
	update = () => {
		console.log('xx')
		this.setState({curentReading: this.props.books.filter((book) => book.shelf ==='currentlyReading')})
		this.setState({wantToRead: this.props.books.filter((book) => book.shelf ==='wantToRead')})
		this.setState({read: this.props.books.filter((book) => book.shelf ==='read')})
		
	}
	
	render () {
		const { curentReading, wantToRead, read, onChangeSearchPage } = this.props;
		// const {} = this.state;

		
		
    	return (
        	<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
          	  <div className="bookshelf">
          			<h2 className="bookshelf-title">Currently Reading</h2>
          			<div className="bookshelf-books">
									<DisplayBooks 
									books={read}
									
									/>
          			</div>
          	  </div>
							<div className="bookshelf">
          			<h2 className="bookshelf-title">Want to read</h2>
          			<div className="bookshelf-books">
									<DisplayBooks books={read}/>
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