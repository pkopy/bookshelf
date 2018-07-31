import React, { Component } from 'react'

class BookShelfChanger extends Component {
	render () {
    
    const { shelf } = this.props;
    console.log(shelf)
    	return (
        	<select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" className={shelf==='currentlyReading'?'checked': ''}>Currently Reading</option>
                <option value="wantToRead" className={shelf==='wantToRead'?'checked': ''}>Want to Read</option>
                <option value="read" className={shelf==='read'?'checked': ''}>Read</option>
                <option value="none" className={shelf==='none'?'checked': ''}>None</option>
            </select>
        )
    }
}

export default BookShelfChanger