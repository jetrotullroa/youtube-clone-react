import React from 'react'
import { render } from 'react-dom'
import YTSearch from 'youtube-api-search'

// components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }


  componentWillMount(props) {
    const YT_API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw'
    YTSearch({ key: YT_API_KEY, term: 'skateboard'}, (videos) => {
     this.setState({videos})
    })
  }

  render() {
    console.log(this.state.videos)
    return (
      <div className="container">
        <h3>YuuTobe</h3>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

let app = document.querySelector('#react-target')

render(<App />, app)
