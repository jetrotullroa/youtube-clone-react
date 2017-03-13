import React from 'react'
import { render } from 'react-dom'

const YT_API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw'

const App = () => {
  return <div>Hi!</div>
}

let app = document.querySelector('#react-target')

render(<App />, app)
