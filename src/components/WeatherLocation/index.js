import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY, APIKEY } from './../../constants/weathers';
import './style.css';


const location = "Los Teques,ve";
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`;

const data = {
	temperature: 20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
};

const data2 = {
	temperature: 18,
	weatherState: WINDY,
	humidity: 5,
	wind: '19 m/s',
};

class WeatherLocation extends Component {

	constructor(){
		super();
		this.state = {
			city: 'Los Teques',
			data: data
		};
	}

	handleUpdateClick = () => {
		
		fetch(apiWeather).then(data => {
			return data.json();
		}).then(weatherData => {
			console.log(weatherData);
		});

		this.setState({
			data: data2
		});

	}

	render = () => {

		const { city, data } = this.state;

		return (
			<div className="weatherLocation">  
				<Location city={city}/>
				<WeatherData data={data}/>
				<button onClick={this.handleUpdateClick}> Actualizar </button>
			</div>
		);	
	};
}


export default WeatherLocation;
