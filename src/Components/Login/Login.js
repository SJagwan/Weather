import React,{Component} from 'react';
import './Login.css';
class Login extends Component{
   constructor(){
      super();
      this.state={
            signInEmail:'',
            signInPassword:''
      }
   }
   onEmailChange=(event)=>{
      this.setState({signInEmail :event.target.value });
   }
   onPasswordChange=(event)=>{
      this.setState({signInPassword :event.target.value });
   }
   onSubmitSignin = async()=>{
      const res=await fetch('http://localhost:3000/signin',{
         method:'post',
         headers:{ 'content-Type' :'application/json'},
         body:JSON.stringify({
            email:this.state.signInEmail,
            password:this.state.signInPassword
         })
      })
      const data= await res.json()
      if(data.id)
      {
         this.props.onRouteChange('Main');
      }

      
   }


   render(){
        return(
          <div id="backL">
             <div className="wrapL">
               <h1 className="h1L">Login</h1>
               <div className="boxL">
                  <label>Email</label>
                  <input onChange={this.onEmailChange} type="email" name="email" placeholder="Enter your Username / Email."></input>
               </div>
               <div className="boxL">
                  <label>Password</label>
                  <input onChange={this.onPasswordChange} type="password" name="password" placeholder="Enter your Password."minLength="8" min="8"></input>
               </div>
               <div className="box1L"> 
                 <p className="p2">Forget Password ??</p>
                 <button onClick={this.onSubmitSignin} className="buttonL" type="submit" >Login</button>
               </div>
               <div className="p1">
                  <p className="p3">If you are New User</p> 
                  <p onClick={()=>this.props.onRouteChange('Register')} className="p2"> Click here</p>
               </div>
              </div>
          </div>
        )
       
    }
}
export default Login;