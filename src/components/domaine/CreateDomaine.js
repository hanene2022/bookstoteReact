import React , {useState} from 'react'
// import axios from "axios";

function CreateDomaine() {
    const [addDomaine,setAddDomaine]=useState(
        {namedomaine:"",
        imgdomaine:"",
       }) 
        // const  navigate = useNavigate()
        const handleSubmit =(e)=>{
            e.preventDefault();
            const formData =new FormData();
            formData.append("namedomaine",addDomaine.namedomaine);
            formData.append("imgdomaine",addDomaine.imgdomaine)
console.log(addDomaine.namedomaine,addDomaine.imgdomaine)
            //   axios.post('http://localhost:3001/createAuthor',addDomaine)
            //   .then(response=>{console.log(response)
            //                   window.location='/domaines'
            //                  })
            //   .catch(error=>console.log(error))
            
            }
  return (
    <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>

<form onSubmit={handleSubmit}>
<h2> Add  Domaine</h2>
<div className='mb-2'>
    <label htmlFor=''>Name</label>
    <input type="text" placeholder='Name of domaine'
     className='form-control'
     value={addDomaine.namedomaine}
     onChange={(event)=>
     
    setAddDomaine({...addDomaine,namedomaine: event.target.value})} />
</div>
<div className='mb-2'>
    <label htmlFor=''>imgdomaine</label>
    <input type="file"
     placeholder='image of domaine' 
     className='form-control'
     value={addDomaine.imgdomaine}
     onChange={(event)=>
     
    setAddDomaine({...addDomaine,imgdomaine: event.target.value})}
     />
</div>



<button className='btn btn-primary'>submit</button>
</form>
    </div>


</div>
  )
}

export default CreateDomaine