import Login from './components/login/Login';
import Register from './components/register/Register';
// import Book from './components/book/Book';
// import NavBar from './components/Navbar/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Home from './components/Home';
import Authors from './components/Author/Authors';
import UpdateAthor from './components/Author/UpdateAuthor';
import CreateAuthor from './components/Author/CreateAuthor';
// import Domaine from './components/domaine/Domaines';
// import  CreateDomaine from './components/domaine/CreateDomaine';
// import UpdateDomaine from './components/domaine/UpdateDomaine';
// import Categories from './components/Categorie/Categories';
// import CreateCategorie from './components/Categorie/CreateCategorie';
// import UpdateCategorie from './components/Categorie/UpdateCategorie';
import DeleleAuthor from './components/Author/DeleleAuthor';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
  
      {/* <Route path='/register' element={<Register/>} ></Route>
       <Route  path='/login' element={<Login/>} ></Route>
       <Route  path='/home' element={<Home/>} ></Route> */}
       {/* *************** */}
       <Route  path='/createauthor' element={<CreateAuthor/>} ></Route>
       <Route  path='/authors' element={<Authors/>} ></Route>
       <Route  path='authors/updateauthor/:id' element={<UpdateAthor/>} ></Route>
       <Route  path='authors/deleteauthor/:id' element={<DeleleAuthor/>} ></Route>
       {/* ********************* */}
       {/* <Route  path='/domaines' element={<Domaine/>} ></Route>
       <Route  path='/createdomaine' element={<CreateDomaine/> }></Route>
       <Route  path='/updatedomaine' element={<UpdateDomaine/> } ></Route> */}
       {/* ********************** */}
       {/* <Route  path='/categories' element={<Categories/> } ></Route>
       <Route  path='/updatecategorie' element={<UpdateCategorie/> } ></Route>
       <Route  path='/createcategorie' element={<CreateCategorie/> } ></Route> */}



    </Routes>
    
    </BrowserRouter>
   
  
    

  );
}

export default App;
