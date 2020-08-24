import React from 'react';

function VideoDetail ({ selectedVideo }) {
	if (!selectedVideo) {
		return <div className="ui active centered inline loader" />;
	}
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} title={selectedVideo.snippet.title} />
			</div>
			<div className="ui segment">
				<h2 className="ui header">{selectedVideo.snippet.title}</h2>
				<p>{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
