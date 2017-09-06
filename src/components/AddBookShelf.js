import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from '../api/BooksAPI'

class AddBookShelf extends Component {

    state = {
        books: []
    }
    
    searchBooks = (query) => {
        if(!query) {
            this.setState({ books: [] })
        } else {
            BooksAPI.search(query).then((books) => {
                this.setState({ books })
            })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={ (event) => this.searchBooks(event.target.value) }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ListBooks 
                            books={ this.state.books && this.state.books.length > 0 && this.state.books.filter((book) => !book.shelf || book.shelf === 'none')} 
                            title="All books off the shelf"
                            OnSelectChangeBook={this.props.OnSelectChangeBook}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default AddBookShelf