import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { APIKEY, APIURL } from './../../constants/weathers';
import './style.css';

class WeatherLocation extends Component {

	constructor({ city }){
		super();
		this.state = {
			city,
			data: null
		};
	}

	handleUpdateClick = () => {
		
		const { city } = this.state;
		const apiWeather = `${APIURL}?q=${city}&appid=${APIKEY}`;

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
			</div>
		);	
	};
}

WeatherLocation.propTypes = {
	city: PropTypes.string,
}

export default WeatherLocation;
