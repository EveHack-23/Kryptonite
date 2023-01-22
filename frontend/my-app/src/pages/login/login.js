import React,{useState} from 'react'
import "./login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Login() {
   
    const navigate=useNavigate();
    const [user,setUser ]=useState({
        name:"",
        email:"",
        password:""
     });

     const handleChange= (e)=>{
        const{name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
     }

     const login=()=>{
        axios.get("/auth/login",user)
        .then(res => {
            alert(res.data.message)
            navigate("/")
        })
        
     }
    
     
  return (
    <div className='heads'>
      <p  className="heading"/>

<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">An integrated platform for people working in agriculture</h1>
            <p class="col-lg-10 fs-4">This platform could be a one-stop-shop for farmers, providing them with the
                information and tools they need to improve their operations and increase their profits.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
            <div class="p-4 p-md-5 border rounded-3 bg-light log">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" onChange={handleChange} id="floatingInput" placeholder="name@example.com"
                        fdprocessedid="8vn2x4"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" onChange={handleChange} id="floatingPassword" placeholder="Password"
                        fdprocessedid="bod0fv"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" fdprocessedid="1ws4er" onClick={login} >Login</button>
                <p>Dont have an account? <a href="/signup">sign-up</a></p>
                <hr class="my-4"/>
                <small class="text-muted">By clicking login, you agree to the terms of use.</small>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login
