import React, {Component} from 'react';

class CityCountryInput extends Component {
	render() {
		return (
			<form
				onSubmit={this.props.getWeather}>
				<input 
					type="text"
					placeholder="City" />
				<input 
					type="text"
					placeholder="Country" />
				<input
					type="submit" />
			</form>)
	};
};

export default CityCountryInput;