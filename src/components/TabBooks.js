import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import ListBooks from './ListBooks'

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

class TabBooks extends Component {

    state = {
        slideIndex: 0
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value
        })
    }

    render() {
        return (
            <div>
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
                            <ListBooks books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading" />
                        </div>
                        <div style={styles.slide}>
                            <ListBooks books={this.props.books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read" />
                        </div>
                        <div style={styles.slide}>
                            <ListBooks books={this.props.books.filter((book) => book.shelf === 'read')} title="Read"/>
                        </div>
                    </SwipeableViews>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default TabBooks