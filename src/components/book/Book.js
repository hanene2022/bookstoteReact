import {useState} from "react"
import axios from "axios";
const Book=()=> {
  const [formAdd,setFormAdd]=useState(
    {title:"",
    categorie:"",
    datecreation:"",
    file:"",
    pdfName:"",
    poster:"",
    imageName:"",
    nbpages:"100"
  
}) 

  return (
    
             <form onSubmit={(event)=>{
               event.preventDefault()
           
               axios.post("http://localhost:3001/book/addbook/",{})
            .then(response=>{console.log(response.data)})
            .catch(error=>{console.log(error)})
            }}>
      <label>Title:</label>
      <input value={formAdd.title}
      type="text"
       onChange={(event)=>
         
      setFormAdd({...formAdd,title: event.target.value})
       }/><br/>
       <label>categorie:</label>
      <input value={formAdd.categorie}
      type="text"
       onChange={(event)=>
         
      setFormAdd({...formAdd,categorie: event.target.value})
       }/><br/>

          <label> date de creation:</label>
      <input value={formAdd.datecreation}
      type="text"
       onChange={(event)=>
         
      setFormAdd({...formAdd,datecreation: event.target.value})
       }/><br/>

          <label>Number of pages:</label>
      <input value={formAdd.nbpages}
      
      type="text"
       onChange={(event)=>
         
      setFormAdd({...formAdd,nbpages: event.target.value})
       }/><br/>
         
         <label>File:</label>
      <input value={formAdd.file}
        type="file"
       onChange={(event)=>
         
      setFormAdd({...formAdd,fileName: event.target.files[0].name,
                              file:event.target.files[0]})
      
   
      }/><br/>
             <label>Poster:</label>
      <input value={formAdd.poster}
      type="file"
       onChange={(event)=>
         
        setFormAdd({...formAdd,imageNameName: event.target.files[0].name,
                              poster:event.target.files[0]})
       }/><br/>

<button>Add Book</button>
        
    </form>
  )
}

export default Book