import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { shallow } from 'enzyme'

global.localStorage = {
  token: Math.random().toString(36).substr(-8)
}

it('renders without crashing', () => {
  shallow(<App />)
})


