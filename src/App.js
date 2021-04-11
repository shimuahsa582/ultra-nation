import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
import animalData from './fakeData/fakeData.json';
function App() {
	const [ countries, setCountries ] = useState([]);
	const [ cart, setCart ] = useState([]);
	const [ animal, setAnimal ] = useState([]);
	useEffect(() => {
		setAnimal(animalData);
		console.log(animalData);
	}, []);

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((data) => setCountries(data))
			.catch((error) => console.log(error));
	}, []);
	const handleAddCountry = (country) => {
		// console.log('added', country);
		const newCart = [ ...cart, country ];
		setCart(newCart);
	};

	return (
		<div className="App">
			<h1>Loaded Countries:{countries.length}</h1>
			<h4>country added:{cart.length}</h4>
			<Cart cart={cart} />
			<ul>
				{countries.map((country) => (
					<Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} />
				))}
			</ul>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
