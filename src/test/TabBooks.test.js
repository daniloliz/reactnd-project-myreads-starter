import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import createRouterContext from 'react-router-test-context'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TabBooks from '../components/books/TabBooks'

it('renders without crashing', () => {
    expect(shallow(<TabBooks />));
})

it('list one book on read shelf', () => {
    let book = { id: 1, shelf: 'read' };
    let context = createRouterContext();
    context.muiTheme = getMuiTheme();
    let wrapper = mount(<TabBooks books={[ book ]} />, { 
        context,
        childContextTypes: {
            router: React.PropTypes.object,
            muiTheme: React.PropTypes.object.isRequired
        }}
    );

    expect(wrapper.find('ListBooks').get(2).props.books.length).toBe(1);
})