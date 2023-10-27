import { useState } from "react";
import axios from "axios";

import{Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


 const Register= ()=>{
  const [formRegisterInputs,setFormRegisterInput]= useState(
{
  firstName:" ",
lastName:" ",
pseudo:" ",
password:" ", 
email:" ",
city:" "
}
);
const  navigate = useNavigate()
// axios.defaults.withCredentials= true;
const handleSubmit =(e)=>{
e.preventDefault();
  axios.post('http://localhost:3001/register', formRegisterInputs)
  .then(response=>{console.log(response)
                  navigate('/login')
                 })
  .catch(error=>console.log(error))

}
    return(
      <div className="d-flex bg-secondary d-flex 
        justify-content-center align-items-center vh-100">
<div className="bg-white p-3 rounded w-25">
<h2>Register</h2>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="Inputfirstname" className="form-label">FirstName</label>
  <input type="text" placeholder="enter nom" className="form-control rounded-0 " id="Inputfirstname"
  value={formRegisterInputs.firstName}  onChange={(event)=>
         
                    setFormRegisterInput({...formRegisterInputs,firstName: event.target.value})
                    }
                   required
                 />
</div>
<div className="mb-3">
<label htmlFor="Inputlastname" className="form-label">
               LastName *
                 </label>
                 <input
                  type="text"
                 className="form-control"
         id="Inputlastname"
                 value={formRegisterInputs.lastName}
                 onChange={(event)=>setFormRegisterInput({...formRegisterInputs,lastName: event.target.value})
                    }required/>
</div>
<div  className="mb-3 ">
<label htmlFor="exampleInputpseudo" className="form-label">
                   Pseudo *
                </label>
                <input
                  type="text"
                  className="form-control"
         id="exampleInputpseudo"
                  value={formRegisterInputs.pseudo}
                  onChange={(event)=>
         
                    setFormRegisterInput({...formRegisterInputs,pseudo: event.target.value})
                    }
                  required
                />
</div>
<div className="mb-3 ">
                 <label htmlFor="Inputpassword" className="form-label">
                   Password *
                 </label>
                <input
                  type="password"
                  className="form-control "
       id="Inputpassword"
                  value={formRegisterInputs.password}
                  onChange={(event)=>
         
                    setFormRegisterInput({...formRegisterInputs,password: event.target.value})
                    }
                  required
                />
</div>
<div className="mb-3">
<label htmlFor="Inputemail" className="form-label">
                  Email *
                 </label>
                <input
                  type="email"
                  className="form-control "
                    id="Inputemail"
                  value={formRegisterInputs.email}
                  onChange={(event)=>
         
                    setFormRegisterInput({...formRegisterInputs,email: event.target.value})
                    }
                  required
                />
</div>
<div className="mb-3">
               <label htmlFor="Inputcity" className="form-label">
                   City *
                 </label>
                <input
                  type="text"
                 className="form-control"
          id="Inputcity"
                  value={formRegisterInputs.city}
                   onChange={(event)=>
         
                     setFormRegisterInput({...formRegisterInputs,city: event.target.value})
                     }
                   required
                 />
               </div>
               <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
</form>
<p>Already Have an account</p>
<Link to="/login" className="btn btn-default border w-100 bg-info rounded">Login</Link>
</div>
</div>

    );
  }
    
  export default  Register
 
