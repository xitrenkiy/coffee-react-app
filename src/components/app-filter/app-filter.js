

import './app-filter.sass';

const AppFilter = (props) => {
	const dataBtns = [
		{name: 'brazil', label: 'Brazil'},
		{name: 'kenya', label: 'Kenya'},
		{name: 'columbia', label: 'Columbia'}
	];

	const elements = dataBtns.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? 'active' : '';
		return (
			<button className={`btn-filter ${clazz}`}
					key={name} 
					onClick={() => props.onFilter(name)}>
					{label}</button>
		)
	});

	return (
		<div className='button-wrapper'>
			{elements}
		</div>
	)
}

export default AppFilter;