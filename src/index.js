import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBook from './components/App'
import './index.css'

/**
 * @description component App constant
 */
const App = () => (
  <MuiThemeProvider>
    <AppBook />
  </MuiThemeProvider>
)

/**
 * @description invoke the render in ReactDOM
 */
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root')
)
