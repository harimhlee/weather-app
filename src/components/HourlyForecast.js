import React from 'react';
const HourlyForecast = (props) => {
    return (
        <div>
            <h4>Hourly Forecast:</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Hour</th>
                        <th>Max Temp</th>
                        <th>Min Temp</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[0].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[0].main.temp_max}</th>
                        <th>{props.forecast[0].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[1].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[1].main.temp_max}</th>
                        <th>{props.forecast[1].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[2].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[2].main.temp_max}</th>
                        <th>{props.forecast[2].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[3].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[3].main.temp_max}</th>
                        <th>{props.forecast[3].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[4].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[4].main.temp_max}</th>
                        <th>{props.forecast[4].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[5].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[5].main.temp_max}</th>
                        <th>{props.forecast[5].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[6].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[6].main.temp_max}</th>
                        <th>{props.forecast[6].main.temp_min}</th>
                    </tr>
                    <tr>
                        <th>{props.forecast[7].dt_txt.toString().slice(11, 19)}</th>
                        <th>{props.forecast[7].main.temp_max}</th>
                        <th>{props.forecast[7].main.temp_min}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default HourlyForecast;