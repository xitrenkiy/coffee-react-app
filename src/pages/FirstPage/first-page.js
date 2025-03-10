import NavBar from "../../components/navbar/navbar";
import { Title, SecondTitle } from "../../components/title/title";
import LogoBean from "../../components/divider/divider";
import CardList from "../../components/card-list/card-list";
import Footer from "../../components/footer/footer";

import './first-page.sass';


const FirstPage = ({ data }) => {
	return (
		<main>

			<section className="greetings">
				<header><NavBar /></header>
				<Title name='Everything You Love About Coffee' />
				<LogoBean />
				<div className="descr">
					<p>We make every day full of energy and taste <br />
					<span>Want to try our beans?</span>
					</p>
				</div>
				<div className="center-btn">
					<button className="more-info-btn">More</button>
				</div>
			</section>

			<section className="about">
				<SecondTitle name='About Us'/>
				<LogoBean color='black'/>
				<div className="about-text">
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions. As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p>
					<p>
						Now residence dashwoods she excellent you. Shade being under his bed her, Much
						read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
						horrible but confined day end marriage. Eagerness furniture set preserved far
						recommend. Did even but nor are most gave hope. Secure active living depend son
						repair day ladies now.
					</p>
				</div>
			</section>

			<section className="our-best">
				<SecondTitle name='Our Best'/>
				<CardList data={data}/>
			</section>

			<Footer />
		</main>
	)
}

export default FirstPage;