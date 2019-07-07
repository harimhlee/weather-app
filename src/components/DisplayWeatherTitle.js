import React from 'react';

const DisplayWeatherTitle = (props) => {
	return (
		<header>
			<h1>Here's the weather in {props.city}, {props.country}</h1>
		</header>
	);
};

export default DisplayWeatherTitle;