import React from 'react';
// if component needs to render more than one thing, must have a state

const Form = (props) => {
	return (
		<form
			onSubmit={props.handleFormSubmit}>
          <label>
            <input 
            	type="radio" 
            	value="By City/Country" 
            	checked={props.selected==='By City/Country'}
            	onChange={props.handleOptionChange}
            	 /> By City/Country <br />
            <input 
            	type="radio" 
            	value="By Zipcode" 
            	checked={props.selected==='By Zipcode'}
            	onChange={props.handleOptionChange}
            	/> By Zipcode <br />
            <input 
            	type="submit" 
            	value="Submit"
            	/>
          </label>		
          </form>
	);
};



export default Form;