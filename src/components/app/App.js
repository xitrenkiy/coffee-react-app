import { Component } from 'react';
import ReactModal from 'react-modal';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstPage from '../../pages/FirstPage/first-page';
import SecondPage from '../../pages/SecondPage/second-page';
import ThirdPage from '../../pages/ThirdPage/third-page';

import './app.sass';
import { Title, SecondTitle } from '../title/title';
import NavBar from '../navbar/navbar';
import LogoBean from '../divider/divider';

ReactModal.setAppElement('#root');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bestData: [
				{src: require('../../assets/images/solemo-coffee.png'), alt: 'Solimo', name: 'Solimo Coffee Beans 2 kg', price: 10.73, id: 1},
				{src: require('../../assets/images/presto.png'), alt: 'Presto', name: 'Presto Coffee Beans 1 kg', price: 15.99, id: 2},
				{src: require('../../assets/images/aromistico.png'), alt: 'Aromistico', name: 'AROMISTICO Coffee 1 kg', price: 6.99, id: 3}
			],
			content: [
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Solimo Morning Blend 1 kg', price: 6.99, id: 1, country: 'Brazil'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Aromistico Dark Roast 2 kg', price: 7.99, id: 2, country: 'Kenya'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Presto Classic Espresso 500 g', price: 8.99, id: 3, country: 'Columbia'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Bean Brothers French Vanilla 1 kg', price: 9.99, id: 4, country: 'Brazil'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Caffe Crema Smooth 1 kg', price: 6.99, id: 5, country: 'Brazil'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Java Delight Medium Roast 1 kg', price: 6.99, id: 6, country: 'Brazil'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Columbia Supremo Beans 1 kg', price: 6.99, id: 7, country: 'Kenya'},
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Kenya Sunrise Light Roast 1 kg', price: 6.99, id: 8, country: 'Columbia'},
			],
			filter: '',
			text: '',
			curId: '',
			shomModal: false
		}
	}

	handleOpenModal = () => {
		this.setState({ showModal: true });
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	onFilterClick = (items, filter) => {
		switch(filter) {
			case 'brazil': 
				return items.filter(item => item.country === 'Brazil');
			case 'columbia':
				return items.filter(item => item.country === 'Columbia');
			case 'kenya':
				return items.filter(item => item.country === 'Kenya');
			default:
				return items;
		}
	}

	onFilter = (filter) => {
		this.setState({filter})
	}

	onChangeInput = (items, text) => {
		if (text.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.toLowerCase().includes(text.toLowerCase())
		})
	}

	onSearch = (text) => {
		this.setState({text});
	}

	onBoxClick = (data, curId) => {
		return data.find(item => item.id === curId) || {};
	}

	onIdClick = (curId) => {
		this.setState({curId, showModal: true})
	}

	render() {
		const { bestData, content, filter, text, curId, showModal } = this.state;
		const visibleData = this.onChangeInput(this.onFilterClick(content, filter), text);
		const { country, price, src} = this.onBoxClick(content, curId);

		return (
			<div className="app">
			<Router>
				<Routes>
					<Route path='/' element={<FirstPage data={bestData} onIdClick={this.onIdClick}/>} />
					<Route path='/coffee' element={<SecondPage data={visibleData} onFilter={this.onFilter} onSearch={this.onSearch} filter={filter} onIdClick={this.onIdClick}/>} />
					<Route path='/about' element={<ThirdPage data={visibleData} onIdClick={this.onIdClick}/>} />
				</Routes>
				
				<ReactModal 
				isOpen={showModal}
				closeTimeoutMS={1000}
				contentLabel="Minimal Modal Example"
				onRequestClose={this.handleCloseModal}
				>
				<div className="card-info">
					<NavBar />
					<Title name='Our Coffee' />
					<section className="about-beans">
						<img src={src} alt={`Coffee from ${country}`} />
						<div className="about-beans-text">
							<SecondTitle name='About It' />
							<LogoBean color='black' />
							<p><span className='bold'>Country:</span> {country}</p>
							<p> <span className='bold'>Description: </span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vitae ut aliquid ducimus quo quibusdam vero odit accusantium rerum saepe! Inventore beatae expedita iusto recusandae velit saepe corporis voluptas temporibus!
							</p>
							<p>Price: <span className='bold big'>{price}$</span></p>
						</div>
					</section>
			
					<footer className='footer'>
						<NavBar color='black' align='center'/>
						<LogoBean color='black' />
					</footer>
				</div>
				
				<button onClick={this.handleCloseModal} className='close-modal'>✖️</button>
				</ReactModal>
			</Router>
			</div>
		  )
	}
}

export default App;
