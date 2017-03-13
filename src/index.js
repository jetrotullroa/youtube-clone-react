import React from 'react'
import { render } from 'react-dom'

// components
import SearchBar from './components/search_bar'

const YT_API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw'

const App = () => {
  return (
    <div>
      <h3>YuuTobe</h3>
      <SearchBar />
    </div>
)
}

let app = document.querySelector('#react-target')

render(<App />, app)
