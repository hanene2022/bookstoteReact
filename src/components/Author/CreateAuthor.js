import React , {useState} from 'react'
import axios from "axios";
 import { useNavigate } from "react-router-dom";
function CreateAuthor() {
   

    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [imgName, setImgName] = useState('');
const navigate = useNavigate();
const handlePhotoChange = (event) => {
    setImgName(event.target.files[0].name);
    setPhoto(event.target.files[0]);
  };
const handleFirstNameChange = (event) => {
setFirstName(event.target.value);
  };
const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
const handlePhoneChange = (event) => {
setPhone(event.target.value);
  };
const handleSubmit = (event) => {
    event.preventDefault();
    if ( photo) {
      const formData = new FormData();
       formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);

      formData.append('image', photo);
      formData.append('imgName', imgName);
   axios
        .post('http://localhost:3001/createAuthor', formData)
        .then((response) => {
          console.log(response.data);
          navigate('/Authors');
        })
        .catch((error) => console.log(error));  }};
 return (
    <div className='d-flex h-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>

<form onSubmit={handleSubmit}>
    <h2> Add Author</h2>
    <div className='mb-2'>
        <label htmlFor=''>FirstName</label>
        <input type="text" placeholder='Enter firstname'
         className='form-control'
         value={firstName}
         onChange={handleFirstNameChange}
         
       />
    </div>
    <div className='mb-2'>
        <label htmlFor=''>LastName</label>
        <input type="text"
         placeholder='Enter lastname' 
         className='form-control'
         value={lastName}
         onChange={handleLastNameChange}
         
       
         />
    </div>
    <div className='mb-2'>
        <label htmlFor=''>Email</label>
        <input type="email" 
        placeholder='Enter email' 
        className='form-control'
        value={email}
        onChange={handleEmailChange }
        
      />
    </div>
    
   
    <div className='mb-2'>
        <label htmlFor=''>Phone</label>
        <input type="text" 
        placeholder='Enter phone'
         className='form-control'
         value={phone}
         onChange={handlePhoneChange}
         

         />
    </div>
    <div className='mb-2'>
    <label htmlFor=''>Photo</label>
    <input type="file"
     placeholder='Enter photo'
      className='form-control'
      value={photo}
      onChange={handlePhotoChange}
      
 
      /></div>
    <button className='btn btn-success'>submit</button>
</form>
        </div>


    </div>
  )
}

export default CreateAuthor