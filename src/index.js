import React from 'react'
import { render } from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
// components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }

    this.videoSearch('reactjs')
  }


  videoSearch(term) {
    const YT_API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw'
    YTSearch({ key: YT_API_KEY, term: term }, (videos) => {
     this.setState({
       videos: videos,
       selectedVideo: videos[0]
     })
    })
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div className="container content">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onInputChange={videoSearch} />
          </div>
          <div className="col-md-12">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onSelectedVideo={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}

let app = document.querySelector('#react-target')

render(<App />, app)
