import  "./NavBar.css"
function NavBar() {
  return (
    <>
    <header>
<nav className="navbar navbar-expand-lg  ">
  <div className="container ">
    <a className="navbarBrand" href="#">
   
       Library online</a>
    
  
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="navLink " href="#">Home</a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#">My library</a>
        </li>
        <li className="nav-item">
          <a className="navLink" href="#">My books</a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#">My book Audio</a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#">Blog</a>
        </li>
      </ul>
    </div>
 
</nav>


<div className="text-box">
    <h1 className="info text-danger">welcome to  our library online</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Soluta harum exercitationem reiciendis voluptates dolor delectus, doloribus deleniti accusamus totam <br/>
       reprehenderit rerum distinctio velit laudantium eum, 
        aspernatur dicta laborum saepe </p>
        <button   className="btn btn-primary hero-btn">Login</button>
        <button  className="btn btn-primary hero-btn">Register</button>
        
        </div>
</header>


    </>
  )
}

export default NavBar