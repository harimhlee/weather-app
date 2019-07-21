import React from 'react';
import ForecastDay from './ForecastDay';


const ForecastTitle = (props) => {
        const currDate = props.currTime.slice(0, 11);
        console.log(currDate);
        let oneDay = [];
        let twoDays = [];
        let threeDays = [];
        let fourDays = [];
        let fiveDays = [];
        for (var i = 0; i < props.forecast.length; i ++) {
            var date = props.forecast[i].dt;
            var myDate = new Date(date *1000);
            var myTime=myDate.toGMTString().slice(0, 11);
            if (myTime === currDate) {
                continue;
            }

        }
        return (
            <div>
                <h1> This is the forecast for the next 5 days: {console.log(props.forecast)}</h1>
                <ForecastDay 
                    forecast={props.forecast.slice(0,7)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(7, 15)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(15, 23)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(23, 31)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(31, 39)}
                    onSubmit={props.onSubmit}
                />
             </div>            
        );

}
export default ForecastTitle;