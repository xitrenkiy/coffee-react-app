import { CardItem } from '../card/card';

import './card-list.sass';

const CardList = ({ data }) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		
		return (
			<CardItem 
				key={id}
				{...itemProps}
			/>
		)
	});

	return (
		<div className="card-wrapper">
			{elements}
		</div>
	)
}

export default CardList;