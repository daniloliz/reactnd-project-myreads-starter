import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBook from './App'
import './index.css'

const App = () => (
  <MuiThemeProvider>
    <AppBook />
  </MuiThemeProvider>
)

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root'))
