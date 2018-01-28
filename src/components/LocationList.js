import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
	<div>
		<WeatherLocation city={'Los Teques,ve'} />
		<WeatherLocation city={'Caracas,ve'} />
		<WeatherLocation city={'Cumana,ve'} />
	</div>

);

export default LocationList;