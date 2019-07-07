import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import ZipcodeInput from './components/ZipcodeInput';
import CityCountryInput from './components/CityCountryInput';
import DisplayWeatherTitle from './components/DisplayWeatherTitle';


class App extends Component {
	today = new Date();
	time = this.today.toLocaleTimeString('en-US');
	date = (this.today.getMonth()+1)+'-'+this.today.getDate() + '-' + this.today.getFullYear();
	dateTime = this.date + ' ' + this.time;


	state = {
		time: this.dateTime,
		selected: 'By City/Country',
		displayTitle: true,
		displayRadio: true,
		displayInput: false,
		city: undefined,
		country: undefined,
		zipcode: undefined,
		temperature: undefined,
		humidity: undefined, 
		description: undefined,
		error: undefined,
		displayWeather: false,
		}

	// For Form.js
	handleOptionChange = changeEvent => {
		this.setState({
			selected: changeEvent.target.value
		});
	};

	handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault();
		this.setState({
			displayInput: true,
			displayRadio: false
		});
	};


	getCityCountryWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d951a9e409977399fb17f61bf4a8bb87`);
  		const response = await api_call.json();
  		if (city && country) {
	  		this.setState({
	  				temperature: response.main.temp,
		  			city: city,
		  			country: response.sys.country,
		  			humidity: response.main.humidity,
		  			description: response.weather[0].description,
		  			error: "",
		  			displayWeather: true,
		  			displayInput: false,
		  			displayTitle: false,
				});
  			} else {
  				alert("City/Country not found.");
  			}

  	};
  
  	getZipcodeWeather = async (e) => {
  		e.preventDefault();
 		const zipcode = e.target.elements.zipcode.value;
 		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=d951a9e409977399fb17f61bf4a8bb87`);
  		const response = await api_call.json();
  		const city = response.name;
  		if (city) {
	  		this.setState({
	  			temperature: response.main.temp,
	  			city: city,
	  			country: response.sys.country,
	  			humidity: response.main.humidity,
	  			description: response.weather[0].description,
	  			error: "",
	  			displayWeather: true,
	  			displayInput: false,
	  			displayTitle: false
	  		});
	  	} else {
	  		alert("Not a valid zipcode.");
	  	};
  	};


   render(){
    return(
      <div>
        {this.state.displayTitle && 
        	<Title 
        		title="Title"
        		time={this.state.time}
        	/>}
        {this.state.displayRadio && 
        	<Form 
        		handleOptionChange={this.handleOptionChange}
        		selected={this.state.selected}
        		handleFormSubmit={this.handleFormSubmit}
        	/>}
        {this.state.displayInput && this.state.selected==='By Zipcode' && 
        	<ZipcodeInput 
        		getWeather={this.getZipcodeWeather}
        	/>}
        {this.state.displayInput && this.state.selected==='By City/Country' && 
        	<CityCountryInput 
        		getWeather={this.getCityCountryWeather}
        	/>}
        {this.state.displayWeather && 
        	<DisplayWeatherTitle 
        		city={this.state.city}
        		country={this.state.country}
        		zipcode={this.state.zipcode}
        		temperature={this.state.temperature}
        		humidity={this.state.humidity}
        		description={this.state.description}
        		error={this.state.error}
        	/>}
      </div>
   )
  }
}
export default App;