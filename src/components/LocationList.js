import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities, onSelectedLocation }) => { 

	const handleWeatherLocationClick = city => {
		console.log("handleWeatherLocationClick");
		onSelectedLocation(city);
	}

	const strToComponent = cities => (
		
		cities.map( (city, index) => 
			(
				<WeatherLocation 
					key={index} 
					city={city} 
					onWeatherLocationClick={ () => handleWeatherLocationClick(city) } />))
	);


	return (
		<div>
			{strToComponent(cities)}
		</div>
	);
};

LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
}

export default LocationList;