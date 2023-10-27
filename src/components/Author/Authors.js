import React, { useEffect,useReducer} from 'react'
import { Link} from "react-router-dom"
import axios from 'axios'
function Authors() {
  const initialState = {
    loading: true,
    error: '',
    authors: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          error: '',
          authors: action.payload,
        };
      case 'FETCH_ERROR':
        return {
          loading: false,
          error: 'Something went wrong',
          authors: [],
        };
      default:
        return state;
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('http://localhost:3001/authors/')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);
  return(
  <div>
    
            

<div  className="table" >
    {state.loading ? (
        'Loading...'
      ) : state.authors.map((author, index) => (
        <div key={index}>

  <thead>
<tr>
  <th>FirstName</th>
  <th>LastName</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Photo</th>
</tr>

  </thead>
  <tdody>
    <tr>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>{author.email}</td>
      <td>{author.phone}</td>
      <td><img src={`http://localhost:3001/${author.imgName}`} /></td>
      <td>   <Link to={`updateauthor/${author._id}`}>Update  Author</Link>
              <Link to={`deleteauthor/${author._id}`}>Delate Author</Link></td>
    </tr>
  </tdody>
  </div>
  
  
      ))}
      </div>
    </div>
      
    
      )}
export default Authors



// </div><table className='table mt-3 '>
//   <thead><tr>
//     <th>FirstName</th>
//     <th>lastName</th>
//     <th>Email</th>

//     <th>Phone</th>
//     <th>P</th>
//     <th>Action</th>
// </tr></thead>

//     <tbody>
// {
//   authors.map((author) => {
//  return <tr>
//   <td>{author.firstName}</td>
//   <td>{author.lastName}</td>
//   <td>{author.email}</td>

//   <td>{author.phone}</td>
//   <td></td>
//   <td>
//   <Link to={`updateauthor/${author._id}`} 
//   className="btn btn-primary">Update</Link>
//   <button className="btn btn-danger mx-2">Delete</button>
//   </td>

// </tr>

//   })
// }
//     </tbody>
// </table>



// </div>





//   const[authors,setAuthors]=useState([{
//     FirstName:"Paul",
//     LastName:"Jean",
//     Email:"pauljean@gamil.com",
//     Photo:"my photo",
//     Phone: 6524457544
//   }

//   ])
//   useEffect(()=>{
//     axios.get('http://localhost:3001/authors')
//     .then(result=>setAuthors(result.data))
// .catch(err=>console.log(err))
//   },[])
  
//   return (
//     <div className='d-flex 
//      bg-success
//       vh-100 
    
//       justify-content-center
//        align-items-center'>

// <div className='w-50 bg-white rounded pt-2 my-3'>
//   <Link to="/createauthor" 
//   className="btn btn-primary  mx-5">Add +</Link>
// <table className='table mt-3 '>
//   <thead><tr>
//     <th>FirstName</th>
//     <th>lastName</th>
//     <th>Email</th>

//     <th>Phone</th>
//     <th>P</th>
//     <th>Action</th>
// </tr></thead>

//     <tbody>
// {
//   authors.map((author) => {
//  return <tr>
//   <td>{author.firstName}</td>
//   <td>{author.lastName}</td>
//   <td>{author.email}</td>

//   <td>{author.phone}</td>
//   <td></td>
//   <td>
//   <Link to={`updateauthor/${author._id}`} 
//   className="btn btn-primary">Update</Link>
//   <button className="btn btn-danger mx-2">Delete</button>
//   </td>

// </tr>

//   })
// }
//     </tbody>
// </table>



// </div>

//     </div>
//   )
// }

