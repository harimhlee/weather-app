import React from 'react';

const CurrentWeather = (props) => {


	const capitalizeGreeting = greetingString => {
		var words = greetingString.split(" ");
		let greeting = "";
		for (var index = 0; index < words.length; index ++) {
			var upperCase = words[index].charAt(0).toUpperCase();
			var upperCaseWord = upperCase + words[index].slice(1);
			greeting = greeting.concat(upperCaseWord + " ");
		}
		return greeting
	};

	return (
		<header>
			<h2>{capitalizeGreeting(props.description).slice(0, -1)}! The current temperature is {props.temperature} degrees Fahrenheit. Humidity is currently {props.humidity}. Today's max temp is {props.tempMax} and min temp is {props.tempMin}.</h2>
		</header>
		);
};



export default CurrentWeather;