import React from 'react';
import './Main.css'

const Main=({onInputChange,onSubmitButton,temp,pressure,humidity,description})=>{
    return(
        <div className="Main">
               <h1 className="Mh1 M">Weather Forecast</h1>
               <h3 className="M">Enter the City below....</h3>
               <input onChange={onInputChange} className="MainI" type="type"></input><br/>
               <input onClick={onSubmitButton} className="MainB"type="submit"></input>
               <div className="MainD">
               {temp && <p className="MainP">Temprature : {(temp-273).toFixed(2)} C </p>}
               {pressure && <p className="MainP">Pressure : {pressure}</p>}
               {humidity && <p className="MainP">Humidity : {humidity}</p>}
               {description && <p className="MainP">Description : {description}</p>}
               </div>
               
           

        </div>
    )
}
export default Main;