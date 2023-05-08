import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";


const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay)
    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]

    useEffect(() => {

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: `${latitude},${longitude}`},
  headers: {
    'X-RapidAPI-Key': '39c5e3f3a5msh8160c7a4aace23ap1d4b92jsn0b15e7ff6e80',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
	axios
    .request(options)
    .then(function(response) {
    setWeather(response.data)
	console.log(response.data);
    })
    .catch(function (error) {
	console.error(error);
    })
    
},[])

    return (
        <div>
            <table className="overview-table">
                <tbody>
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Weather;
