import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
	render () {
		const { videos, onSelectVideo } = this.props;
		const renderVideo = videos.map((video) => {
			return <VideoItem video={video} key={video.id.videoId} onSelectVideo={onSelectVideo} />;
		});
		return <div className="ui relaxed divided list">{renderVideo}</div>;
	}
}

export default VideoList;
