import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AddBookShelf from './books/AddBookShelf'
import TabBooks from './books/TabBooks'
import * as BooksAPI from '../api/BooksAPI'
import '../style/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.OnSelectChangeBook = this.OnSelectChangeBook.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  OnSelectChangeBook = (value, book) => {
    book.shelf = value
    let newBooks = this.state.books.filter(b => b.id !== book.id);
    newBooks.push(book)
    BooksAPI.update(book, value).then(() => {
      this.setState({ books: newBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <TabBooks books={this.state.books} OnSelectChangeBook={(value, book) => {
              this.OnSelectChangeBook(value, book)
            }} 
          />
        )} />
        <Route path="/search" render={() => (
          <AddBookShelf OnSelectChangeBook={(value, book) => {
              this.OnSelectChangeBook(value, book)
            }}
          />
        )} />
      </div>
    )
  }
}

App.defaultProps = {
  books: []
};

export default App
