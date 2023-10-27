import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 function Login() {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate= useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email,password} )
    .then(result=>{
      console.log(result)
                   if(result.data==="home"){
                    navigate('/home')
                   }
                   })
    .catch(error=>console.log(error))
  
  }
  
  return (
    <div className="d-flex bg-secondary d-flex 
    justify-content-center align-items-center vh-100">
    
      <div className="bg-white p-3 rounded w-25 ">
      <h2 >Login</h2>
          <form onSubmit={handleSubmit}>
          
        
          <div className="mb-3">
<label htmlFor="Inputemail" className="form-label">
                  Email *
                 </label>
                <input
                  type="email"
                  className="form-control "
                    id="Inputemail"
                    onChange={(e)=>setEmail(e.target.value)}
required
                />
</div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputpassword" className="form-label">
                  PassWord *
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="exampleInputpassword"
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                /></div>
                <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
          <p>Already have Account</p>
          <Link to="/register" className="btn btn-default w-100 bg-primary">sign Up</Link>
        </div>
      </div>
   
  );
}
export default Login
