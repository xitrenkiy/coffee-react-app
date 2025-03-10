import NavBar from "../navbar/navbar";
import LogoBean from "../divider/divider";

import './footer.sass';

const Footer = () => {
	return (
		<footer className='footer'>
			<NavBar color='black' align='center'/>
			<LogoBean color='black' />
		</footer>
	)
}

export default Footer;