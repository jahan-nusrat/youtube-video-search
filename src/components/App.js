import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDaFlM0-OaFCZ-AaOwEBvK287cXcY4uYOg';
class App extends Component {
	state = {
		videos        : [],
		selectedVideo : null
	};

	componentDidMount () {
		this.onSearchSubmit('cats');
	}

	onSearchSubmit = async (term) => {
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params : {
				part       : 'snippet',
				maxResults : 10,
				key        : `${KEY}`,
				type       : 'video',
				q          : term
			}
		});
		this.setState({
			videos        : response.data.items,
			selectedVideo : response.data.items[0]
		});
	};

	onSelectVideo = (selectVideo) => {
		this.setState({
			selectedVideo : selectVideo
		});
	};

	render () {
		return (
			<div className="container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail selectedVideo={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
