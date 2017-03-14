import React from 'react'


const VideoListItem = ({video, onSelectedVideo}) => {
    return(
      <li onClick={() => onSelectedVideo(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={video.snippet.thumbnails.default.url} alt="" className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">
              <h5>{video.snippet.title}</h5>
            </div>
          </div>
        </div>
      </li>
    )
}

export default VideoListItem
