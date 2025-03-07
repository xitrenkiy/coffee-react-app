import './title.sass';

function Title({ name, color, size }) {
	const colored = color || 'white';

	return (
		<h1 className="title" style={{color: colored}}>{name}</h1>
	)
}

function SecondTitle({ name }) {
	return (
		<h2 className='second-title'>{name}</h2>
	)
}

export { Title, SecondTitle };