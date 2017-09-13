import React from 'react'
import ReactDOM from 'react-dom'
import createRouterContext from 'react-router-test-context'
import App from '../components/App'
import { shallow, mount } from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import sinon from 'sinon'

let wrapper, context;

const props = {
  node: document.querySelector('select'),
};

beforeEach(() => {
  let context = createRouterContext();
  context.muiTheme = getMuiTheme();
  wrapper = mount(<App {...props} />, {
    context,
    childContextTypes: {
      router: React.PropTypes.object,
      muiTheme: React.PropTypes.object.isRequired
    }
  });
})

it('renders without crashing', () => {
  expect(shallow(<App />));
})

it('list books', () => {
  expect(wrapper.state().books.length).toBe(0);
})

it('list one book of state', () => {
  expect(wrapper.state().books.length).toBe(0);
  let book = {};
  wrapper.setState({ books: [ book ] });
  expect(wrapper.state().books.length).toBe(1);
})

it('list one book with id and shelf', () => {
  expect(wrapper.state().books.length).toBe(0);
  let book = { id: 1, shelf: 'read' };
  wrapper.setState({ books: [ book ] });
  expect(wrapper.find("li").length).toBe(1);
})

it('list one book on read shelf and alter for whant to read', () => {
  expect(wrapper.state().books.length).toBe(0);
  let book = { id: 1, shelf: 'read' };
  wrapper.setState({ books: [ book ] });
  expect(wrapper.find("li").length).toBe(1);

  // alter shelf - for to read
  wrapper.find('select').node.options[3].selected = true;
  
  expect(wrapper.find('select').node.options[3].selected).toBe(true);
  expect(wrapper.find('select').node.options[0].selected).toBe(false);
})

it('call onSelectChangeBook in TabBooks component, when alter shelf of book', () => {
  
  let book = { id: 1, shelf: 'read' };
  wrapper.setState({ books: [ book ] });
  
  wrapper.find('TabBooks').find('select').node.options[2].selected = true;
  
  let spy = sinon.spy(wrapper.instance(), "OnSelectChangeBook");
  expect(spy).calledOnce;
})

