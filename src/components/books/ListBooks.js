import React, { Component } from 'react'

/**
 * @description ListBooks component
 */
class ListBooks extends Component {
    
    /**
     * @description call OnSelectChangeBook of properties for update the shelf of book
     * @param {object} e //event
     * @param {object} book
     */
    selectChangeBox = (e, book) => {
        e.preventDefault();
        if(this.props.OnSelectChangeBook)
            this.props.OnSelectChangeBook(e.target.value, book);
    }

    render() {
        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.books && this.props.books.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div 
                                        className="book-cover" 
                                        style={{ width: 128, height: 193, backgroundImage: book.imageLinks && book.imageLinks.smallThumbnail && `url(${book.imageLinks.smallThumbnail})` }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                        <select name="select" value="value" onChange={(event) => this.selectChangeBox(event, book)}>
                                            <option style={{fontWeight: 'bold'}}>Move to...</option>
                                            <option value="none" disabled={book.shelf === 'none'}>Remove to shelf</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                        </select>
                                    </div>
                                </div>
                                    <div className="book-title">{book.title}</div>
                                    {book.authors && book.authors.map((author, index) => (
                                        <div key={index} className="book-authors">{author}</div>
                                    ))}
                                </div>
                            </li>
                        ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks;