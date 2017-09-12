import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import createRouterContext from 'react-router-test-context'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AddBookShelf from '../components/books/AddBookShelf'

let wrapper, context

beforeEach(() => {
    let onSelectChangeBook = jest.fn()
    let context = createRouterContext()
    context.muiTheme = getMuiTheme()
    wrapper = mount(<AddBookShelf OnSelectChangeBook={onSelectChangeBook} />, {
      context,
      childContextTypes: {
        router: React.PropTypes.object,
        muiTheme: React.PropTypes.object.isRequired
      }
    })
  })

it('renders without crashing', () => {
    expect(shallow(<AddBookShelf />))
})

it('list a book on no shelf', () => {
    expect(wrapper.state().books.length).toBe(0)
    let book = { id: 1, shelf: 'none' }
    wrapper.setState({ books: [ book ] })
    expect(wrapper.find("li").length).toBe(1)
})

it('list one book on no shelf and other book on read shelf, only one book will be listed', () => {
    expect(wrapper.state().books.length).toBe(0)
    let bookNoShelf = { id: 1, shelf: 'none' }
    let bookOnReadShelf = { id: 1, shelf: 'read' }
    wrapper.setState({ books: [ bookNoShelf, bookOnReadShelf ] })
    expect(wrapper.find("li").length).toBe(1)
})

describe('search books', () => {

    it('search for books by typing a letter', () => {
        wrapper.find('div input').get(0).value = 'A'
        wrapper.find('div input').simulate('change')
        expect(wrapper.find('div input').get(0).value).toEqual('A')
    })
})