import { Component } from 'react';

import FirstPage from '../../pages/FirstPage/first-page';
import SecondPage from '../../pages/SecondPage/second-page';

import './app.sass';

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
				{src: require('../../assets/images/mainphoto.png'), alt: 'Aromisto', name: 'Brazilian Santos Blend 2 kg', price: 6.99, id: 9, country: 'Brazil'},
			],
			filter: 'all',
			text: ''
		}
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

	render() {
		const { bestData, content, filter, text } = this.state;
		const visibleData = this.onChangeInput(this.onFilterClick(content, filter), text);

		return (
			<div className="app">
				{/* <FirstPage data={bestData}/> */}
				<SecondPage data={visibleData} onFilter={this.onFilter} onSearch={this.onSearch} filter={filter}/>
			</div>
		  )
	}
}

export default App;
