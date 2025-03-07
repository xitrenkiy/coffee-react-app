import './navbar.sass';

function NavBar({ color, align}) {
	const colored = color || null;
	const aligned = align || null;

	return (
		<nav className='nav' style={{justifyContent: aligned}}>
			<a className="nav-item" href='true' style={{color: colored}}>Coffee house</a>
			<a className="nav-item" href='true' style={{color: colored}}>Our coffee</a>
			<a className="nav-item" href='true' style={{color: colored}}>For your pleasure</a>
		</nav>
	)
}

export default NavBar;