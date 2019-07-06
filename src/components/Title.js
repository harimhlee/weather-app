import React from 'react';
const Title = (props) => {
	let greeting = '';
	let re = /\d+/;
	const hour = re.exec(props.time.split(' ')[1]);

	if (props.time.slice(-2) === 'PM') {
		if (hour > 6) {
			greeting = 'Good Evening!'
		} else {
			greeting = 'Good Afternoon!'
		}
	} else {
		if (hour > 10) {
			greeting = 'Good Afternoon!'
		} else {
			greeting = 'Good Morning!'
		}
	}


	return (
		<header>
			<h1> {greeting} This is My Weather App!</h1>
			<h2>Currently it's {props.time}</h2>
		</header>

	);
};
export default Title;
