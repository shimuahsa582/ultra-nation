import React from 'react';

const Country = (props) => {
	const { name, population, flag, region } = props.country;
	const flagStyle = {
		height: '50px'
	};
	const countryStyle = {
		border: '1px solid blue',
		margin: '10px',
		padding: '20px'
	};
	const handleAddCountry = props.handleAddCountry;
	return (
		<div style={countryStyle}>
			<h4>Country Details:{name}</h4>
			<p>Population:{population}</p>
			<img style={flagStyle} src={flag} alt="" />
			<p>Region:{region}</p>
			<button onClick={() => handleAddCountry(props.country)}>added country</button>
		</div>
	);
};

export default Country;
