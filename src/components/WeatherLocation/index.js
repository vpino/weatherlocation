import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
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

	getTemp = kelvin => {
		return convert(kelvin).from('K').to('C').toFixed(2);
	}

	getWeatherState = weather => {
		return SUN;
	}
	
	getData = weatherData => {
		
		const { humidity, temp } = weatherData.main;
		const { speed } = weatherData.wind;
		const { weatherState } = this.getWeatherState(this.weather);
		const temperature = this.getTemp(temp);

		console.log(weatherState);

		const data = {
			humidity,
			temperature,
			weatherState,
			wind: `${speed} m/s`,
		}

		return data;
	}


	handleUpdateClick = () => {
		
		fetch(apiWeather).then(data => {
			return data.json();
		}).then(weatherData => {
			const data = this.getData(weatherData);
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
