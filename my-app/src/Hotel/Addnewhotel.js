
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import { Link, useNavigate } from "react-router-dom";
function AddnewHotel() {

    let navigate = useNavigate();

    const [hoteldetail, sethoteldetais] = useState({
        hotelname: "",
        location: "",
        about: "",
        imageLink: ""
    });
    const { hotelName, Location, about, imageLink } = hoteldetail;

    const onInputChange = (e) => {

        sethoteldetais({ ...hoteldetail, [e.target.name]: e.target.value });

    };
    const submitHotel = (e) => {
        e.preventDefault();
        console.log(hoteldetail);

        const headers = {
            'Content-Type': 'application/json'
        }
        fetch("http://localhost:8082/hotels", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(hoteldetail), // Convert the object to JSON
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
            .then(() => {
                //change route after completion
                navigate("/addhotel");
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error:', error);
            });

    }






    return (

        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Enter your Hotels details here</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-item active nav-link nav-link" to="/addhotel">Hotels</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


            <div className="App">
                <div className="container">
                    {/* C:\Users\dell\Desktop\reat grontend\my-app\src\Hotel\hotelimage\hotel.avif */}

                    <div className="row ">

                        <div className="col-md-6 offset-md-3 border rounded p-2 mt-1 shadow">
                            {/* <img src={hotel} alt="imahe"/> */}
                            <form onSubmit={(e) => submitHotel(e)}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Hotel name</label>
                                    <input type="Text" class="form-control" id="exampleInputEmail1"
                                        name="hotelname"
                                        value={hotelName}
                                        onChange={(e) => onInputChange(e)} aria-describedby="emailHelp" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Location</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        name="location"
                                        value={Location}
                                        onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">about</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        name="about"
                                        value={about}
                                        onChange={(e) => onInputChange(e)} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">ImageLink</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        name="imageLink"
                                        value={imageLink}
                                        onChange={(e) => onInputChange(e)} />
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddnewHotel;