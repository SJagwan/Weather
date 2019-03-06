import React,{Component} from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Main from './Main/Main';

const initialState ={
    Input:"",
    Route:'Main',
    temp:"",
    pressure:"",
    humidity:"",
    description:"",
    error:"",
    isSignIn: false

}

class App extends Component {
    constructor() {
        super();
        this.state=initialState;
    }


    onRouteChange = (route)=>{
        if(route === 'Main')
        {
            this.setState({isSignIn : true})
        }
        else{
            this.setState(initialState)
        }
        this.setState({Route : route});
    }
    onInputChange=(event)=>{
        this.setState({Input : event.target.value});
    }
    onSubmitButton = async()=>{
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Input}&APPID=855f7e61faa3e77f7eadd44adfe3e077`)
        const data = await resp.json();   
        if(this.state.Input)
        {
              this.setState({temp:data.main.temp});
              this.setState({pressure:data.main.pressure});
              this.setState({humidity:data.main.humidity});
              this.setState({description:data.weather[0].description});
              console.log(data.name);
        }
    }
      
    render(){
        return(
            
            <div>
                <Navbar onRouteChange={this.onRouteChange} isSignIn={this.state.isSignIn}/>
               {this.state.Route === 'Login'
               ?<Login onRouteChange={this.onRouteChange}/>:
               (this.state.Route ==='Register'?
               <Register onRouteChange={this.onRouteChange}/>:
                ( this.state.Route === 'Home'?
               <Home onRouteChange={this.onRouteChange}/>:
               <Main 
                     onInputChange={this.onInputChange} 
                     onSubmitButton={this.onSubmitButton}
                     temp={this.state.temp}
                     pressure={this.state.pressure}
                     humidity={this.state.humidity}
                     description={this.state.description}
                />
                )
               )
        }
                
            </div>
        )

    }
  
}
export default App;