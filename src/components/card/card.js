import './card.sass';

const CardItem = ({ src, alt, name, price, country, onBoxClick, handleOpenModal }) => {

	let classNames = 'box';
	if(country) {
		classNames += ' main-card';
	}

	return (
		<div className={classNames} onClick={onBoxClick}>
			<img src={src} alt={alt} loading='lazy'/>
			<div className="name">{name}</div>
			<div className="country">{country}</div>
			<div className="price">{price}$</div>
		</div>
	)
}


export { CardItem };