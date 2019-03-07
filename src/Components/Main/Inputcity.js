import React from 'react';
 import './Inputcity.css'
const Inputcity=({onInputChange,onSubmitButton}) => {
    return(
            <div className="InputM">
               <input onChange={onInputChange} className="InputI" type="type" placeholder="Enter city name...."></input>
               <input onClick={onSubmitButton} className="InputB"type="submit"></input>
                    
            </div>
        );
}
export default Inputcity;