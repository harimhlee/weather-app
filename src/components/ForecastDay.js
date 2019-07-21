import React from 'react';

const ForecastDay = (props) => {
    let maxTemp = 0;
    let minTemp = 10000;
    for (var i = 0; i < props.forecast.length; i ++) {
        if (props.forecast[i].main.temp_max > maxTemp) {
            maxTemp = props.forecast[i].main.temp_min
        }
        if (props.forecast[i].main.temp_min < minTemp) {
            minTemp = props.forecast[i].main.temp_min
        }
    }

    var date = props.forecast[0].dt;
    var myDate = new Date(date *1000);
    var myTime=myDate.toGMTString().slice(0,11);

    return(
        <div>
            <h2> For {myTime}, the max temperature will be {maxTemp} degrees Fahrenheit, and the min temperature will be {minTemp} Fahrenheit. </h2>
            <input 
            	type="submit" 
            	value="More Details"
            	/>
        </div>
    )
}

export default ForecastDay;

