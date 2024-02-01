import { Link } from "react-router-dom";
import UserContext from "../Context/usercontext";
import {React,useContext,useEffect, useState} from "react";

function Hotelnav() {
  
  const {user}=useContext(UserContext);
  const [name,setName]=useState("Guest");
  useEffect(()=>{
    if(user==null){
    (setName("Guest"));
    }
    else{
      setName(user.name)
    }
  },[user])
   
 
    return (
          
        <div>

     <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            operations
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/addnewhotel">AddHotel</Link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
      {/* Conditionally render the username */}
      {user.name ? (
          <li class="nav-item nav-link active me-auto text-danger">
            {name}
          </li>
        ):(
          <li class="nav-item nav-link active me-auto text-danger">
            Guest
          </li>
        )
       }
         
      
     
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>  
    );
}

export default Hotelnav;