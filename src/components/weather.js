import React, { Component } from 'react';
import image from './img/cloud1.png';

class Weather extends Component{
	render(){
		return(
			<div className="weather-box">
				<div className="city">
					<img src={image} className="image-cloud"/> <span>{this.props.city}</span>
				</div>
				<div className="conditions">
					<br/>
					Temperature: {this.props.temperature && <span> {this.props.temperature} &#8457;</span>} 
					<br/><br/>
					Humidity: {this.props.humidity && <span> {this.props.humidity} %</span>} 
					<br/><br/>
					Condition: {this.props.description && <span> {this.props.description}</span>}
					<br/><br/>
					{this.props.error && <span> Error : {this.props.error}</span>}
				</div>
			</div>
		)
	}
}
	
export default Weather;