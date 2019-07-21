import React from 'react';
import ForecastDay from './ForecastDay';


const ForecastTitle = (props) => {
        let start = 0;
        while (props.currTime === props.forecast[start].dt_txt.slice(0, 11)) {
            start ++;
        }

        return (
            <div>
                <h1> This is the forecast for the next 5 days: {console.log(props.forecast)}</h1>
                <ForecastDay 
                    forecast={props.forecast.slice(start,start + 8)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(start + 8, start + 16)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(start + 16, start + 24)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(start + 24, start + 32)}
                    onSubmit={props.onSubmit}
                />
                <ForecastDay 
                    forecast={props.forecast.slice(start + 32, start + 40)}
                    onSubmit={props.onSubmit}
                />
             </div>            
        );

}
export default ForecastTitle;