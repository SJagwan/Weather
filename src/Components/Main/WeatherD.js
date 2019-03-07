import React from 'react';
 import './WeatherD.css'
const WeatherD=({temp,pressure,humidity,description,name,display}) => {
    return(
            <div className="Weather">
             {(display) ?
                <div className="center">
                    {name && <p className="WeatherP">Weather of {name} is given below :-</p>}
                    {temp && <p className="WeatherP">Temprature : {(temp-273).toFixed(2)} C </p>}
                    {pressure && <p className="WeatherP">Pressure : {pressure}</p>}
                    {humidity && <p className="WeatherP">Humidity : {humidity}</p>}
                    {description && <p className="WeatherP">Description : {description.toUpperCase()}</p>}
                </div>
                :
                <div/>
                    
         }
               
            </div>
        );
}
export default WeatherD;