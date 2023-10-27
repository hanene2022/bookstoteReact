import React , {useState, useEffect} from 'react'
import axios from "axios";
 import { useParams, useNavigate } from "react-router-dom";

function UpdateAuthor() {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [author, setAuthor] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [imgName, setImgName] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3001/author/${params.id}`)
      .then((response) => {
        setAuthor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong');
        setLoading(false);
      });
  }, [params.id]);
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
   const formData = new FormData();
       formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);

      formData.append('image', photo);
      formData.append('imgName', imgName);
   axios
        .put(`http://localhost:3001/authors/edit/${params.id}`, formData)
        .then((response) => {
          console.log(response.data);
          navigate('/Authors');
        })
        .catch((error) => console.log(error));  };
 return (
    <div >
        {/* <div className='w-50 bg-white rounded p-3'> */}
        <h1>{loading ? 'Loading...' : author.firstName}</h1>
      <br />
      {loading ? 'Loading...' : author.lastName}
      <br />
      {loading ? 'Loading...' : author.email}
      <br />
      {loading ? 'Loading...' : author.phone}<br/>
      {loading ? 'Loading...' : author.photo}

      
<form onSubmit={handleSubmit}>
    <h2> Update Author</h2>
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


 
  )
}

export default UpdateAuthor



// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// function UpdateAthor() {
//     const {id}=useParams()
//     const [addAuthor,setAddAuthor]=useState(
//         {firstName:"",
//         lastName:"",
//         email:"",
//         photo:"",
//         phone:""}) 
//         // const  navigate = useNavigate()

//         useEffect(()=>{
//             axios.get('http://localhost:3001/authors/getAuthor'/+id)
//             // .then(result=>console.log(result.data))
//             .then(response => setAddAuthor(response.data.addAuthor))
      
    
//           .catch(err=>console.log(err))},[])
//           const Update =(e)=>{
//             e.preventDefault()
//             axios.put('http://localhost:3001/updateauthor/+id',addAuthor)
//               .then(response=>{console.log(response)
//                             //   window.location='/authors'
//                              })
//               .catch(error=>console.log(error))
//           }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//     <div className='w-50 bg-white rounded p-3'>
// <form onSubmit={Update}>
// <h2> Update Author</h2>
// <div className='mb-2'>
//     <label htmlFor=''>FirstName</label>
//     <input type="text" placeholder='Enter firstname' className='form-control'
//       value={addAuthor.firstName}
//       onChange={(event)=>
      
//      setAddAuthor({...addAuthor,firstName: event.target.value})}/>
// </div>
// <div className='mb-2'>
//     <label htmlFor=''>LastName</label>
//     <input type="text" placeholder='Enter lastname' className='form-control'
//       value={addAuthor.firstName}
//       onChange={(event)=>
      
//      setAddAuthor({...addAuthor,firstName: event.target.value})}/>
// </div>
// <div className='mb-2'>
//     <label htmlFor=''>Email</label>
//     <input type="email" placeholder='Enter email' className='form-control'
//       value={addAuthor.email}
//       onChange={(event)=>
      
//      setAddAuthor({...addAuthor,email: event.target.value})}/>
// </div>
// <div className='mb-2'>
//     <label htmlFor=''>Photo</label>
//     <input type="text" placeholder='Enter photo' className='form-control'
//       value={addAuthor.photo}
//       onChange={(event)=>
      
//      setAddAuthor({...addAuthor,photo: event.target.value})}/>
// </div>
// <div className='mb-2'>
//     <label htmlFor=''>Phone</label>
//     <input type="text" placeholder='Enter phone' className='form-control'
//       value={addAuthor.phone}
//       onChange={(event)=>
      
//      setAddAuthor({...addAuthor,phone: event.target.value})}/>
// </div>
// <button className='btn btn-success'>Update</button>
// </form>
//     </div>


// </div>
//   )
// }

// export default UpdateAthor