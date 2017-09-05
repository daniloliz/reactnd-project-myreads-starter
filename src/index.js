import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBook from './App'
import './index.css'

const App = () => (
  <MuiThemeProvider>
    <AppBook />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
