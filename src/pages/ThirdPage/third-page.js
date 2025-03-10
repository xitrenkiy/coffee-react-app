import NavBar from "../../components/navbar/navbar";
import LogoBean from "../../components/divider/divider";
import { Title, SecondTitle } from '../../components/title/title';
import CardList from "../../components/card-list/card-list";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";

import cup from '../../assets/images/pleasure.png';

import './third-page.sass';

const ThirdPage = ({ data, onIdClick }) => {
	return (
		<main>

			<section className="for-pleasure">
				<NavBar />
				<Title name='For your pleasure' />
			</section>

			<About photo={cup} 
					titleName='About our goods'
					firstP='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
					secondP='Afraid at highly months do things on at. Situation recommend objection do intention
							so questions. 
							As greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered followed. At it went
							is song that held help face.'
			/>

			<div className="coffee-list">
				<CardList data={data} onIdClick={onIdClick}/>
			</div>

			<Footer />
		</main>

	)
}

export default ThirdPage;