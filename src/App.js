import React, {Component} from 'react';
import CardList from './CardList';
import SearchField from './SearchField';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
import './App.css'

class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
			this.setState({robots: users})
		})
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({searchfield: event.target.value})
		// console.log(filterRobots)
	}

	render(){
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return (
				<div className = "tc">
			  		<h1 className='f1'>Robofriends</h1>
			  		<SearchField searchChange={this.onSearchChange}/>
			  		<Scroll>
			  			<ErrorBoundary>
			  				<CardList robots={filterRobots}/>
			  			</ErrorBoundary>
			  		</Scroll>
				</div>
			);
		}
	}
}

export default App;