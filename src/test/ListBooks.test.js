import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import ListBooks from '../components/books/ListBooks'

it('renders without crashing', () => {
    expect(shallow(<ListBooks />))
})

it('title', () => {
    let component = mount(<ListBooks title="Test Title" />)
    expect(component.props().title).toEqual('Test Title')
})

it('list one book', () => {
    let book = { id: 1 }
    let component = mount(<ListBooks books={[ book ]} />)
    expect(component.props().books.length).toBe(1)
})

it('list one book with smallThumbnail and two authors', () => {
    let book = { 
        id: 1, 
        imageLinks: {smallThumbnail: 'http://getgoosebumps.com.au/wp-content/uploads/2015/08/GB-Folio-Master_Relationship-Things_13.jpg'},
        authors: [ 'author1', 'author2' ]
    }

    let component = mount(<ListBooks books={[ book ]} />)
    expect(component.find('.book-cover div').get(0).style._values['background-image']).toEqual(`url(${book.imageLinks.smallThumbnail})`)
    expect(component.find('.book-authors div').length).toBe(2)
})

it('call OnSelectChangeBook when alter the shelf of book', () => {
    let onSelectChangeBook = jest.fn()
    let book = { id: 1, shelf: 'none' }
    let component = mount(<ListBooks books={[ book ]} OnSelectChangeBook={onSelectChangeBook} />)

    component.find('select').simulate('change', {target: {value: 'read'}})
    expect(onSelectChangeBook).toHaveBeenCalledTimes(1);
})