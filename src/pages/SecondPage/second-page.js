import NavBar from '../../components/navbar/navbar';
import { Title, SecondTitle } from '../../components/title/title';
import LogoBean from '../../components/divider/divider';
import SearchPanel from '../../components/search-panel/search-panel';
import AppFilter from '../../components/app-filter/app-filter';
import CardList from '../../components/card-list/card-list';

import photo2 from '../../assets/images/girl.jpg';

import './second-page.sass';

const SecondPage = ({ data, onFilter, filter, text, onSearch, onChangeInput }) => {
	return (
		<main>

			<section className='our-coffee'>
				<NavBar />
				<Title name='Our Coffee'/>
			</section>

			<section className="about-beans">
				<img src={photo2} alt="Second Img" />
				<div className="about-beans-text">
					<SecondTitle name='About our beans' />
					<LogoBean color='black' />
					<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
					<p>
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions. 
						As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p>
				</div>
			</section>

			<section className="coffee">
				<div className="filters">
					<SearchPanel onSearch={onSearch} onChangeInput={onChangeInput}/>
					<div className="button-wrapper-text">Or Filter</div>
					<AppFilter filter={filter} onFilter={onFilter}/>
				</div>
				<div className="coffee-list">
					<CardList  data={data}/>
				</div>
			</section>

			<footer className='footer'>
				<NavBar color='black' align='center'/>
				<LogoBean color='black' />
			</footer>
			
		</main>
	)
}

export default SecondPage;