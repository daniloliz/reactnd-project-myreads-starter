import React, { Component } from 'react'
import ListBooks from './ListBooks'

class AddBookShelf extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ListBooks books={this.props.books.filter((book) => book.shelf === 'none')} title="All books off the shelf" />
                    </ol>
                </div>
            </div>
        )
    }
}

export default AddBookShelf