import React from 'react'

// component
import VideoListItem from './video_list_item'

const VideoList = ({videos, onSelectedVideo}) => {

  const renderList = videos.map((video) => {
      return (
      <VideoListItem
        onSelectedVideo={onSelectedVideo}
        key={video.etag}
        video={video}
      />
    )
  });

  return(
    <ul className="col-md-4 list-group">
      {renderList}
    </ul>
  )
}

export default VideoList
