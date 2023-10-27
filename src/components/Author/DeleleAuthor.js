import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
function DeleleAuthor() {
    const params = useParams();
    const navigate = useNavigate();
  
    const handleDelete = () => {
      axios.delete(`http://localhost:3001/author/delete/${params.id}`,FormData)
        .then((response) => {
          console.log(response.data);
          navigate('/authors');
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div>
        <button onClick={handleDelete}>Delete Authors</button>
      </div>
    );
  }

export default DeleleAuthor;
