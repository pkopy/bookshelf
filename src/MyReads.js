import React, {Component} from 'react'


class MyReads extends Component {
	render () {
      const { onChangeSearchPage } = this.props;
    	return (
        	<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
          	  <div className="bookshelf">
          			<h2 className="bookshelf-title">Currently Reading</h2>
          			<div className="bookshelf-books">
          		
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