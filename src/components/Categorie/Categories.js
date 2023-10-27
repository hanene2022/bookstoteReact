import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom"
import axios from 'axios'

function Categories() {
    const[categories,setCategories]=useState([{
        title:"programmation",
        imgcategorie:"img de informatique",
        domaine:"informatique"
       }
     
       ])
       useEffect(()=>{
         axios.get('http://localhost:3001/categories')
         .then(result=>setCategories(result.data))
     .catch(err=>console.log(err))
       },[])
  return (
    <div className='d-flex
    vh-100 

    bg-success 
    justify-content-center 
    align-items-center'>

<div className='w-50 bg-white rounded pt-2 mt-3'>
 <Link to="/createcategorie"
  className="btn btn-primary mx-5">Add +</Link>
<table className='table mt-3'>
 <thead><tr>
   <th>title</th>
   <th>imgcategorie</th>
   <th>domaine</th>
   <th>Action</th>
</tr></thead>

   <tbody>
{
 categories.map((categorie) => {
return <tr>
 <td>{categorie.title}</td>
 <td>{categorie.imgcategorie}</td>
 <td>{categorie.domaine}</td>
 <td>
 <Link to={`updatecategorie/${categorie._id}`}
  className="btn btn-primary ">Update</Link>
 <button className="btn btn-danger mx-2">Delete</button>
 </td>

</tr>

 })
}
   </tbody>
</table>



</div>

   </div>
  )
}

export default Categories