import React from 'react';
import HeadM from 'C:/practice/src/Components/Main/HeadM.js';
import Inputcity from 'C:/practice/src/Components/Main/Inputcity.js'
import WeatherD from 'C:/practice/src/Components/Main/WeatherD.js'
import './Main.css'

const Main=({onInputChange,onSubmitButton,name,temp,pressure,humidity,description,display})=>{
    return(
        <div className="Main">
         <HeadM/>
         <Inputcity onInputChange={onInputChange} onSubmitButton={onSubmitButton} />
         <WeatherD name={name} temp={temp} pressure={pressure} humidity={humidity} description={description} display={display}/>
              
        </div>
    );
}
export default Main;