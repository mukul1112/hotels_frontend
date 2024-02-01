// @flow
import React,{useEffect, useState} from 'react';
import Hotelnav from './HotelNav';
import Card from '../component/Card';

  
 function AddHotel() {
  const [hotels,sethotels]=useState([]);
  const [error,setError]=useState([]);



useEffect(()=>{
  loadHotels();

},[])

const loadHotels=()=>{
    fetch("http://localhost:8082/hotels ")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then((responseData) => {
        sethotels(responseData); // Update the state with the fetched data
        console.log(responseData);
       
      })
      .catch((error) => {
        setError(error); // Handle errors
       
      });


  }



  return (
    <div>
       <Hotelnav/>
        <div className="container-xl text-center px-4">
          <div className='row  gx-1 row-cols-4 '> 
        {hotels.map((hotel)=>(
          <Card data={hotel}/>
          
        ))}
        </div>
        </div>
        
        







       
    </div>
  );
};
export default AddHotel;