
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import React, { useState } from "react";

function App() {
    

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAboutyourself] = useState("");
    const [password, setpassword] = useState("");
   
     let navigate=useNavigate();
    // const handleValidation = (event) => {
    //   let formIsValid = true;
  
    //   if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    //     formIsValid = false;
    //     setemailError("Email Not Valid");
    //     return false;
    //   } else {
    //     setemailError("");
    //     formIsValid = true;
    //   }
  
    //   if (!password.match(/^[a-zA-Z]{8,22}$/)) {
    //     formIsValid = false;
    //     setpasswordError(
    //       "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
    //     );
    //     return false;
    //   } else {
    //     setpasswordError("");
    //     formIsValid = true;
    //   }
  
    //   return formIsValid;
    // };
  
    const loginSubmit = (e) => {
      e.preventDefault();
      console.log(email,name,about);
     const object={
        name:name,
        email:email,
        about:about,
        password:password

      }
      const headers = {'Content-Type':'application/json'
                    }
      fetch("http://localhost:8081/user-registration", {
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
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });
        navigate("/userauthentication");
     // handleValidation();
    };
  
    return (
        <>
        <Navbar/>

      <div className="App">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-12 shadow">
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
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Name"
                    onChange={(event) => setname(event.target.value)}
                  />
                  
                </div>
                <div className="form-group">
                  <label>About</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Aboutyourself"
                    onChange={(event) => setAboutyourself(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setpassword(event.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
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

export default App;