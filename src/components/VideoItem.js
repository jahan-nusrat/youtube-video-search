import React from 'react';
import './Video.css';

function VideoItem ({ video, onSelectVideo }) {
	const clickHandler = () => {
		return onSelectVideo(video);
	};
	return (
		<div className="video-item item" onClick={clickHandler}>
			<img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default VideoItem;
