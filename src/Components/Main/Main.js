import React from 'react';
import HeadM from 'C:/Weather/src/Components/Main/HeadM';
import Inputcity from 'C:/Weather/src/Components/Main/Inputcity';
import WeatherD from 'C:/Weather/src/Components/Main/WeatherD';
import './Main.css'

const Main=({onInputChange,onSubmitButton,name,temp,pressure,humidity,description,display,error})=>{
    return(
        <div className="MainC">
         <HeadM/>
         <Inputcity onInputChange={onInputChange} onSubmitButton={onSubmitButton} />
         <WeatherD name={name} temp={temp} pressure={pressure} humidity={humidity} description={description} display={display} error={error}/>
              
        </div>
    );
}
export default Main;