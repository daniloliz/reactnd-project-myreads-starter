import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AddBookShelf from './books/AddBookShelf'
import TabBooks from './books/TabBooks'
import * as BooksAPI from '../api/BooksAPI'
import '../style/App.css'

/**
 * @description App Component
 * @constructor
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.OnSelectChangeBook = this.OnSelectChangeBook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  /**
   * @description update the shelf of book in server db
   * @param {string} value
   * @param {object} book
   */
  OnSelectChangeBook = (value, book) => {
    if(book.shelf !== value) {
      book.shelf = value;
      BooksAPI.update(book, value).then(() => {
        this.setState(prevState => ({ 
          books: prevState.books.filter(b => b.id !== book.id).concat(book)
        }));
      });
    }
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
          <AddBookShelf books={this.state.books.filter(item => item.shelf !== 'none')} OnSelectChangeBook={(value, book) => {
              this.OnSelectChangeBook(value, book)
            }}
          />
        )} />
      </div>
    )
  }
}

App.propTypes = {
  books: PropTypes.array
};

export default App;
