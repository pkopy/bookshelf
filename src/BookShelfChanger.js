import React, { Component } from 'react'

class BookShelfChanger extends Component {
	render () {
    
    const { shelf = 'none' } = this.props;
    console.log(shelf)
    	return (
        	<select value={shelf}>
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