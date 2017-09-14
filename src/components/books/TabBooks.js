import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

/**
 * @description TabBooks component
 * @constructor
 */
class TabBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }

    /**
     * @description set a new slideIndex value on state
     * @param {number} value
     */
    handleChange = (value) => {
        this.setState({
            slideIndex: value
        });
    }

    render() {
        const { books } = this.props;
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
                        tabItemContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                        inkBarStyle={{backgroundColor: 'rgb(255, 255, 255)'}}
                    >
                        <Tab label="Currently Reading" value={0} />
                        <Tab label="Want to Read" value={1} />
                        <Tab label="Read" value={2} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <div style={{padding: 10}}>
                            <ListBooks 
                                books={books && books.filter((book) => book.shelf === 'currentlyReading')} 
                                title="Currently Reading"
                                OnSelectChangeBook={this.props.OnSelectChangeBook} 
                            />
                        </div>
                        <div style={{padding: 10}}>
                            <ListBooks 
                                books={books && books.filter((book) => book.shelf === 'wantToRead')} 
                                title="Want to Read"
                                OnSelectChangeBook={this.props.OnSelectChangeBook} 
                            />
                        </div>
                        <div style={{padding: 10}}>
                            <ListBooks 
                                books={books && books.filter((book) => book.shelf === 'read')} 
                                title="Read"
                                OnSelectChangeBook={this.props.OnSelectChangeBook} 
                            />
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

TabBooks.propTypes = {
    slideIndex: PropTypes.number
};

export default TabBooks;