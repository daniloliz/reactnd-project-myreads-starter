import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './api/BooksAPI'
import './style/App.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  
  slide: {
    padding: 10
  },

  tab: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  line: {
    backgroundColor: 'rgb(255, 255, 255)'
  }
}

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    slideIndex: 0
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
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
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            className="list-books-title"
            tabItemContainerStyle={styles.tab}
            inkBarStyle={styles.line}
          >
            <Tab label="Currently Reading" value={0} />
            <Tab label="Want to Read" value={1} />
            <Tab label="Read" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={styles.slide}>
              <ListBooks books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading" />
            </div>
            <div style={styles.slide}>
              <ListBooks books={this.state.books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read" />
            </div>
            <div style={styles.slide}>
              <ListBooks books={this.state.books.filter((book) => book.shelf === 'read')} title="Read"/>
            </div>
          </SwipeableViews>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
