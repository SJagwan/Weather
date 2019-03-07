import React from 'react';
import './Navbar.css';

const Navbar=({onRouteChange,isSignIn})=>{
    return(

        <nav id="wrapN">
            <ul id="wrapNL"> 
                <div className="leftside">
                   <li onClick={()=> onRouteChange('Home')} className="list">Home </li>
                   {/* <li className="list">AboutMe</li>
                   <li className="list">Contact</li> */}
                </div>
               {isSignIn?( 
                  <div className="rightside">
                    <li onClick={()=> onRouteChange('Login')} className="list1">SignOut</li>
                    {/* <li onClick={()=> onRouteChange('Register')} className="list1">SignUp</li> */}
                  </div>
                 )
                 :
                 (
                  <div className="rightside">
                     <li onClick={()=> onRouteChange('Login')} className="list1">SignIn</li>
                     <li onClick={()=> onRouteChange('Register')} className="list1">SignUp</li>
                  </div>    
                 )
               }
                 
                
                
                
                
            </ul>
        </nav>
    )
}
export default Navbar;