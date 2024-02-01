



import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/usercontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
function Navbar() {
  let navigate = useNavigate();

  const [username, setusername] = useState("");
  const {setuser}=useContext(UserContext);

  useEffect(() => {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
    }
    fetch("http://localhost:8081/user/user-logedin", {
      method: 'GET',
      headers: headers,

    })
      .then((response) => {
        if (!response.ok) {


        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        // Handle the API response data
        console.log('Response:', data);
        setusername(data.name)
        setuser(data);

      })
  }, [])

  const Logout = () => {
    console.log("logout");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
    navigate("/userauthentication");

  }
  return (
    // <div>Hi</div>


    <>
      {!username && (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/addhotel" >Hotels</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link className="nav-link active" to='/'>Home</Link>
                </li>

                <li class="nav-item">
                  <Link className='nav-link active' to='/adduser'>Register</Link>
                </li>
                <li class="nav-item">
                  <Link className='nav-link active' to='/userauthentication'>login</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      )}
      {username && (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/addhotel" >Hotels</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link className="nav-link active" to='/'>Home</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {username}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link class="dropdown-item nav-linkactive" to="/addhotel">Hotels</Link></li>
                    <li><a class="dropdown-item" href="#">your Hotels</a></li>
                    <li><a class="dropdown-item" onClick={Logout}>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>


  );
}

export default Navbar;