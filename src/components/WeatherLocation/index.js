import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './style.css';

const data = {
	temperature: 20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
};

class WeatherLocation extends Component {

	render = () => (
		<div className="weatherLocation">  
			<Location city={'Los Teques!'}/>
			<WeatherData data={data}/>
		</div>	
	);
}


export default WeatherLocation;
