import React from 'react';
import ForecastDay from './ForecastDay';


const ForecastTitle = (props) => {
        return (
            <div>
                <h1> This is the forecast for the next 5 days:</h1>
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