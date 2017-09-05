import React from 'react'
import { Route } from 'react-router-dom'
import AddBookShelf from './components/AddBookShelf'
import TabBooks from './components/TabBooks'
import * as BooksAPI from './api/BooksAPI'
import './style/App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <TabBooks books={this.state.books} />
        )} />
        <Route path="/search" render={({ history }) => (
          <AddBookShelf books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
