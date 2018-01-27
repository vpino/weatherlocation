import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { SUN, APIKEY } from './../../constants/weathers';
import './style.css';

const location = "Los Teques,ve";
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`;

const data = {
	temperature: 20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
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
			const data = transformWeather(weatherData);
			this.setState({data});
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
