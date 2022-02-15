import React, { useState } from "react";
import Button from "../components/button.component";

import './Sign.styles.css'
const Signin = (props) =>{


        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [modal,setModal] = useState(false);
  

        const onemailChange=(event)=>{
            setEmail(event.target.value);
        };

        const onPasswordChange=(event)=>{
            setPassword(event.target.value);
        };
        
   
        const onSubmit=(event)=>{
            event.preventDefault();

            const Details={
                Email:email,
                Password:password,
            }
        
                

        ClearAll();
        };

        function ClearAll(){
        setEmail('');
        setPassword('');
        }

    return(
      
       <>
       {!modal?
        <form onSubmit={ onSubmit }>
        <div class="Fields">
        <div>  
        <div class="formContainer">
        <div className="Form">
        <p>Please use this form to Login</p>
  <br/>
   <div className="ab">
       
       <br/>
    <label for="validationCustom01" className="form-label">Enter Email</label>
    <input type="email" className="form-control" id="validationCustom01" value={email} onChange={onemailChange} placeholder="Email" required/>
  </div>
  <br/>
  <div className="ab">
    <label for="validationCustom02" className="form-label">Enter Password</label>
    <input type="password" className="form-control" id="validationCustom02" value={password} onChange={onPasswordChange}  placeholder="Password" required/>
  </div>
  <div className="button">
  <Button type='submit' value='Submit' className="btn btn-info" >SIGN IN</Button>
  <Button type='reset' className="btn btn-info " onClick={()=>ClearAll()}>Clear All</Button>
  </div>
  <p>Don't have account yet. Click on <a className="register" onClick={()=>setModal(true)}>Register Now</a> </p>
  <br/>
</div>
</div>
</div>
</div>
</form>:
<>
<form onSubmit={ onSubmit }>
        <div class="Fields">
        <div>  
        <div class="formContainer">
        <div className="Form">
        <p>Please use this form to Register Now</p>
  <br/>
   <div className="ab">  
       <br/>
    <label for="validationCustom01" className="form-label">Enter Email</label>
    <input type="email" className="form-control" id="validationCustom01" value={email} onChange={onemailChange} placeholder="Email" required/>
  </div>
  <br/>
  <div className="ab">
    <label for="validationCustom02" className="form-label">Enter Password</label>
    <input type="password" className="form-control" id="validationCustom02" value={password} onChange={onPasswordChange}  placeholder="Password" required/>
  </div>
  <div className="button">
  <Button type='submit' value='Submit' className="btn btn-info edit" >Register NOW</Button>
  <Button type='reset' className="btn btn-info edit" onClick={()=>ClearAll()}>Clear All</Button>
  </div>
  <p>Have an account. Click on <a className="register" onClick={()=>setModal(false)}>Back to sign in</a> </p>
  <br/>
</div>
</div>
</div>
</div>
</form>
</>}

</>


    );
    
     
};

export default Signin;