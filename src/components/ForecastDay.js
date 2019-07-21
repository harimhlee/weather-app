import React, {Component} from 'react';
import HourlyForecast from './HourlyForecast';


class ForecastDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.calculateDate = this.calculateDate.bind(this);
        this.calculateMinMaxTemp = this.calculateMinMaxTemp.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    calculateMinMaxTemp = (forecast) => {
        let maxTemp = 0;
        let minTemp = 1000;
        for (var i = 0; i < forecast.length; i ++) {
            if (forecast[i].main.temp_max > maxTemp) {
                maxTemp = forecast[i].main.temp_max;
            }
            if (forecast[i].main.temp_min < minTemp) {
                minTemp = forecast[i].main.temp_min;
            }
        }
        return [maxTemp, minTemp];
    };

    calculateDate = (forecast) => {
        var date = forecast[0].dt;
        var myDate = new Date(date *1000);
        var myTime=myDate.toGMTString().slice(0,11);
        return myTime;
    };

    onClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        return (
            <div>
                <h1>{this.calculateDate(this.props.forecast)}</h1>
                <h3>Max Temp: {this.calculateMinMaxTemp(this.props.forecast)[0]}, Min Temp: {this.calculateMinMaxTemp(this.props.forecast)[1]}</h3>
                {!this.state.expanded && 
                <input 
                    type="submit" 
                    value="More Details"
                    onClick={this.onClick}
                />}
                {this.state.expanded && 
                <HourlyForecast 
                    forecast={this.props.forecast}
                />}
                {this.state.expanded && 
                <input
                    type="submit"
                    value="Close"
                    onClick={this.onClick}
                    
                />}                
            </div>
        )
    }
}


export default ForecastDay;

