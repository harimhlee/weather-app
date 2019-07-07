import React, {Component} from 'react';

class ZipcodeInput extends Component {
	//state= {

	//};
	render() {
		return (
			<form
				onSubmit={this.props.getWeather}>
				<input 
					type="text"
					placeholder="Enter Your Zipcode" />
				<input
					type="submit"
					value="submit" />
			</form>)
	};
};

export default ZipcodeInput;