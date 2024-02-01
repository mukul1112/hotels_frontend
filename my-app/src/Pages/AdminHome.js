

import React, { useEffect, useState } from 'react';
import Login from '../User/login';
import Navbar from '../component/navbar';
import { Button, Modal } from 'bootstrap';
import { useParams } from 'react-router-dom';
import Modals from './modal';

function AdminHome() {
  const [userdata, setuserdata] =useState([]);
  const [userid,setuserId]=useState("");
  const [error,setError]=useState("");
  const {id}=useParams();
  const [username,setusername]=useState("");


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (useriD,username) => {
    setIsModalOpen(true);
    console.log(useriD)
    setuserId(useriD)
    setusername(username)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
   console.log("useeefect")
   loaduser();

  },[]);

  const loaduser=()=>{
    fetch("http://localhost:8081/users ")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then((responseData) => {
        setuserdata(responseData); // Update the state with the fetched data
        //console.log(responseData);
       
      })
      .catch((error) => {
        setError(error); // Handle errors
       
      });


  }
  const handleDelete = (id) => {
    //alert("do you want to delete")
    fetch(`http://localhost:8081/users/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // If the delete was successful, refresh the data
        loaduser();
      })
      .catch((error) => {
        setError(error);
      });
      closeModal();

      
  };

  const userinfo=(id)=>{
    fetch(`http://localhost:8081/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response JSON
    })
    .then((responseData) => {
       // Update the state with the fetched data
      console.log(responseData);
     
    })
    .catch((error) => {
      setError(error); // Handle errors
     
    });


  };

    return (

<div className='container'>
<div>
     <Navbar/>
</div>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">About</th>
      <th scope="col">Action</th>
     

    </tr>
  </thead>
  <tbody>
    {
      userdata.map((user,index)=>(

      <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.about}</td>
      <td><button className='btn btn-danger btn-sm mx-2' onClick={()=>openModal(user.id,user.name)}>Delete</button>
      <button class="btn btn-primary btn-sm mx-2">update</button>
      <button class="btn btn-info btn-sm mx-2"  onClick={()=>(userinfo(user.id))}>info</button>
      </td>
      
    </tr>
   

      ))
    }
    
  </tbody>
</table>

   <Modals isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => {handleDelete(userid)}}
        id={username}/>
</div>
            
        </div>
    );
}

export default AdminHome;