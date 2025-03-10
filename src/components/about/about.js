import { SecondTitle } from '../title/title';
import LogoBean from '../divider/divider';

import './about.sass';

const About = ({ photo, titleName, firstP, secondP }) => {
	return (
		<section className="about-beans">
			<img src={photo} alt="Second Img" />
			<div className="about-beans-text">
				<SecondTitle name={titleName} />
				<LogoBean color='black' />
				<p>{firstP}</p>
				<p>{secondP}</p>
			</div>
		</section>
	)
}

export default About;