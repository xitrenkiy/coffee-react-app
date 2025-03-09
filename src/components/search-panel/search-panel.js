import { Component } from 'react';

import './search-panel.sass';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	onChangeInput = (e) => {
		const text = e.target.value;
		this.setState({text});
		this.props.onSearch(text);
	}

	render() {
		return (
			<div className='search-panel'>
				<label htmlFor="coffee">Looking for</label>
				<input type="text" value={this.state.text} name="coffee" id="" placeholder='start typing here...' onChange={this.onChangeInput}/>
			</div>
		)
	}
}

export default SearchPanel;