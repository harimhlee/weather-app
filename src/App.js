import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import ZipcodeInput from './components/ZipcodeInput';
import CityCountryInput from './components/CityCountryInput';


class App extends Component {
	today = new Date();
	time = this.today.toLocaleTimeString('en-US');
	date = (this.today.getMonth()+1)+'-'+this.today.getDate() + '-' + this.today.getFullYear();
	dateTime = this.date + ' ' + this.time;


	state = {
		time: this.dateTime,
		selected: 'By City/Country',
		isSubmitted: false,
		city: undefined,
		country: undefined,
		zipcode: undefined,
		temperature: undefined,
		humidity: undefined 
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
			isSubmitted: true
		});
	};


	getCityCountryWeather = async (e) => {
		e.preventDefault();
  		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=d951a9e409977399fb17f61bf4a8bb87`);
  		const response = await api_call.json();
  		console.log(response);
  	};
  
  	getZipcodeWeather = async (e) => {
  		e.preventDefault();
  		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=d951a9e409977399fb17f61bf4a8bb87`);
  		const response = await api_call.json();
  		console.log(response);
  	};


   render(){
    return(
      <div>
        <Title 
        title="Title"
        time={this.state.time}
        />
        {!this.state.isSubmitted && <Form 
        	handleOptionChange={this.handleOptionChange}
        	selected={this.state.selected}
        	handleFormSubmit={this.handleFormSubmit}
        	/>}
        {this.state.isSubmitted && this.state.selected==='By Zipcode' && 
        	<ZipcodeInput 
        		getWeather={this.getZipcodeWeather}
        		/>}
        {this.state.isSubmitted && this.state.selected==='By City/Country' && 
        	<CityCountryInput 
        		getWeather={this.getCityCountryWeather}
        		/>}
      </div>
   )
  }
}
export default App;