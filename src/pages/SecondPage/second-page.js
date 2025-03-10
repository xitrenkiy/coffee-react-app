import NavBar from '../../components/navbar/navbar';
import { Title, SecondTitle } from '../../components/title/title';
import LogoBean from '../../components/divider/divider';
import SearchPanel from '../../components/search-panel/search-panel';
import AppFilter from '../../components/app-filter/app-filter';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';
import About from '../../components/about/about';

import photo2 from '../../assets/images/girl.jpg';

import './second-page.sass';

const SecondPage = ({ data, onFilter, filter, onSearch, onChangeInput, onIdClick }) => {
	return (
		<main>

			<section className='our-coffee'>
				<NavBar />
				<Title name='Our Coffee'/>
			</section>

			<About photo={photo2}
					titleName='About our beans'
					firstP='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
					secondP='Afraid at highly months do things on at. Situation recommend objection do intention
						so questions. 
						As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.'
			/>

			<section className="coffee">
				<div className="filters">
					<SearchPanel onSearch={onSearch} onChangeInput={onChangeInput}/>
					<div className="button-wrapper-text">Or Filter</div>
					<AppFilter filter={filter} onFilter={onFilter}/>
				</div>
				<div className="coffee-list">
					<CardList data={data} onIdClick={onIdClick}/>
				</div>
			</section>
			
			<Footer />
		</main>
	)
}

export default SecondPage;