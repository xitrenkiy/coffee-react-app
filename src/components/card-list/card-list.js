import { Component } from 'react';

import { CardItem } from '../card/card';

import './card-list.sass';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curId: '',
			showModal: false
		}
	}

	onIdClick = (curId) => {
		this.setState({curId})
	}

	render() {
		let { data, onIdClick } = this.props;

		const elements = data.map(item => {
			const { id, ...itemProps } = item;
			
			return (
				<CardItem 
					key={id}
					{...itemProps}
					onBoxClick={() => {onIdClick(id)}}
				/>
			)
		});
	
		return (
			<div className="card-wrapper">
				{elements}
			</div>
		)
	}
}

export default CardList;