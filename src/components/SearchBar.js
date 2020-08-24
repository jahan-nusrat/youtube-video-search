import React, { Component } from 'react';

class SearchBar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			term : ''
		};
		this.inputRef = React.createRef();
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	onInputChange = (e) => {
		this.setState({
			term : e.target.value
		});
	};

	componentDidMount () {
		this.inputRef.current.focus();
	}

	render () {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="video">Video Search</label>
						<input ref={this.inputRef} type="text" value={this.state.term} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
