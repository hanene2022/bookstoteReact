import React , {useState} from 'react'
import axios from "axios";
function CreateCategorie() {
    const [addCategorie,setAddCategorie]=useState(
        {title:"",
        imgcategorie:"",
        domaine:""
       }) 
        // const  navigate = useNavigate()
        const handleSubmit =(e)=>{
            e.preventDefault();
              axios.post('http://localhost:3001/createCategorie',addCategorie)
              .then(response=>{console.log(response)
                              window.location='/categories'
                             })
              .catch(error=>console.log(error))
            
            }


  return (
    <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>

<form onSubmit={handleSubmit}>
<h2> Add   Categorie</h2>
<div className='mb-2'>
    <label htmlFor=''>Tille</label>
    <input type="text" placeholder='title categorie'
     className='form-control'
     value={addCategorie.title}
     onChange={(event)=>
     
    setAddCategorie({...addCategorie,title: event.target.value})} />
</div>
<div className='mb-2'>
    <label htmlFor=''>imgcategorie</label>
    <input type="text"
     placeholder='image of domaine' 
     className='form-control'
     value={addCategorie.imgcategorie}
     onChange={(event)=>
     
    setAddCategorie({...addCategorie,imgcategorie: event.target.value})}
     />
</div>
<div className='mb-2'>
    <label htmlFor=''>domaine</label>
    <input type="text"
     placeholder='domaine' 
     className='form-control'
     value={addCategorie.domaine}
     onChange={(event)=>
     
    setAddCategorie({...addCategorie,domaine: event.target.value})}
     />
</div>


<button className='btn btn-primary'>submit</button>
</form>
    </div>


</div>
   
  )
}

export default CreateCategorie