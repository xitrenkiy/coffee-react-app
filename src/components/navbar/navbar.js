import { NavLink } from 'react-router-dom';

import './navbar.sass';

function NavBar({ color, align}) {
	const colored = color || null;
	const aligned = align || null;

	return (
		<nav className='nav' style={{justifyContent: aligned}}>
			<NavLink to='/' className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } style={{color: colored}}>Coffee house</NavLink>
			<NavLink to='/coffee' className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } style={{color: colored}}>Our coffee</NavLink>
			<NavLink to='/about' className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } style={{color: colored}}>For your pleasure</NavLink>
		</nav>
	)
}

export default NavBar;