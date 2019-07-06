import React, {Component} from 'react';
// if component needs to render more than one thing, must have a state

class Form extends Component {

	render() {
	return (
		<form
			onSubmit={this.props.handleFormSubmit}>
          <label>
            <input 
            	type="radio" 
            	value="By City/Country" 
            	checked={this.props.selected==='By City/Country'}
            	onChange={this.props.handleOptionChange}
            	 /> By City/Country <br />
            <input 
            	type="radio" 
            	value="By Zipcode" 
            	checked={this.props.selected==='By Zipcode'}
            	onChange={this.props.handleOptionChange}
            	/> By Zipcode <br />
            <input 
            	type="submit" 
            	value="Submit"
            	/>
          </label>		
          </form>
	);
	}

}


export default Form;