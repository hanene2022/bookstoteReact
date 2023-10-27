import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom"
import axios from 'axios'
function Domaines() {
  const[domaines,setDomaines]=useState([{
   name:"informatique",
   imgdomaine:"img de informatique"

  }

  ])
  useEffect(()=>{
    axios.get('http://localhost:3001/domaines')
    .then(result=>setDomaines(result.data))
.catch(err=>console.log(err))
  },[])
  
  return (
    <div className='d-flex
     vh-100 
 
     bg-success 
     justify-content-center 
     align-items-center'>

<div className='w-50 bg-white rounded pt-2 mt-3'>
  <Link to="/createdomaine"
   className="btn btn-primary mx-5">Add +</Link>
<table className='table mt-3'>
  <thead><tr>
    <th>Name</th>
    <th>imgdomaine</th>



    <th>Action</th>
</tr></thead>

    <tbody>
{
  domaines.map((domaine) => {
 return <tr>
  <td>{domaine.name}</td>
  <td>{domaine.imgdomaine}</td>
  <td>
  <Link to={`updatedomaine/${domaine._id}`}
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

export default Domaines