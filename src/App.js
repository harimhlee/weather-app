import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';

class App extends Component {
	today = new Date();
	time = this.today.toLocaleTimeString('en-US');
	date = (this.today.getMonth()+1)+'-'+this.today.getDate() + '-' + this.today.getFullYear();
	dateTime = this.date + ' ' + this.time;


	state = {
		time: this.dateTime,
		selected: 'By City/Country',
		isSubmitted: false
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
  		console.log(this.state.isSubmitted);
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
        	/>
        }
      </div>
   )
  }
}
export default App;