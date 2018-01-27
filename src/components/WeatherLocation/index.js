import React, { Component } from 'react';
import { Spin } from 'antd';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { APIKEY } from './../../constants/weathers';
import './style.css';

const location = "Los Teques,ve";
const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`;

class WeatherLocation extends Component {

	constructor(){
		super();
		this.state = {
			city: 'Los Teques',
			data: null
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

	componentWillMount(){
		this.handleUpdateClick();
	}

	render = () => {

		const { city, data } = this.state;

		return (
			<div className="weatherLocation">  
				<Location city={city}/>
				{ data ? <WeatherData data={data}/> : <div> <Spin size="large"/> </div>}
				<button onClick={this.handleUpdateClick}> Actualizar </button>
			</div>
		);	
	};
}


export default WeatherLocation;
