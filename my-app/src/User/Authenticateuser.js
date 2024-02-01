
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import React, { useState } from "react";

function Authenticateuser() {
    

    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    
     let navigate=useNavigate();
    
  
    const loginSubmit = (e) => {
      e.preventDefault();
      console.log(email,password);
     const object={
      
        email:email,
      
        password:password

      }
      const headers = {'Content-Type':'application/json'
                    }
      fetch("http://localhost:8081/auth/login", {
        method: 'POST',
        headers:headers,
        body: JSON.stringify(object), // Convert the object to JSON
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response JSON
        })
        .then((data) => {
          // Handle the API response data
          console.log('Response:', data);
           localStorage.setItem( "jwtToken",data.jwtToken);
           localStorage.setItem("username",data.username)

        }).then(()=>{
            navigate("/");
        }
        )
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });
       
    
    };
  
    return (
        <>
        <Navbar/>

      <div className="App">
        <div className="container">
          <div className="row g-9 ">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <form id="loginform" onSubmit={loginSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                 
                </div>
                
                
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="password"
                    onChange={(event) => setpassword(event.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary mx-2">
                  Submit
                </button>
                <Link className='btn btn-outline-danger mx-2' to="/">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Authenticateuser;