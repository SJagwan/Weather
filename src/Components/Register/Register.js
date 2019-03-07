import React,{Component} from 'react';
import './Register.css';

class Register extends Component{

    constructor(props){
    super(props);
    this.state={
          RegisterName:'',
          RegisterEmail:'',
          RegisterPassword:''
    }
 }
 onNameChange=(event)=>{
  this.setState({RegisterName :event.target.value });
}
 onEmailChange=(event)=>{
    this.setState({RegisterEmail :event.target.value });
 }
 onPasswordChange=(event)=>{
    this.setState({RegisterPassword :event.target.value });
 }
 onSubmitRegister = async(e)=>{
    e.preventDefault();
   const res=await fetch('http://localhost:3000/register',{
      method :'POST',
      headers:{ 'content-Type' :'application/json'},
      body:JSON.stringify({
         name:this.state.RegisterName,
         email:this.state.RegisterEmail,
         password:this.state.RegisterPassword
      })
   })
   const user= await res.json();
   if(user.id)
   {
      this.props.onRouteChange('Login');
   }

   
}  


  render(){
    return(
      <div>
        <form className="wrapR">
          <h1 className="h1R">Register</h1>
            <div className="boxR">
               <label>Name</label>
               <input onChange={this.onNameChange} type="text" name="email" placeholder="Enter Your Name."></input>
            </div>
            <div className="boxR">
               <label>Email</label>
               <input onChange={this.onEmailChange} type="email" name="email" placeholder="Enter Your Email.."></input>
            </div>
            <div className="boxR">
               <label>Password</label>
               <input onChange={this.onPasswordChange} type="password" name="password" minLength="8" placeholder="Enter your Password." ></input>
            </div>
            <div className="box1R"> 
              <p onClick={()=>this.props.onRouteChange('Login')} className="pR" >Already a member?</p>
              <button onClick={this.onSubmitRegister}  className="buttonR" type="submitt">Register</button>
            </div>
             
          </form>
      </div>
   )
  }
 
}
export default Register;