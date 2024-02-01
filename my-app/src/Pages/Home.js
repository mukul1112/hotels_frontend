import React, { useEffect, useState } from 'react';
import Navbar from '../component/navbar';
import hotel1 from './imges/hotel1.jpeg';
import hotel2 from './imges/hotel2.jpg';
import hotel3 from './imges/hotel3.jpg'
import styles from './home.module.css';

function Home() {

  return (

    <>
         <div>
          <Navbar />
        </div>
      <div>
        <div id="carouselExampleDark" class="carousel slide carousel-fade">
     <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={hotel1} class="d-block w-100" style={{height:'590px',width:'500px'}}alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={hotel2} class="d-block w-100"style= {{height:'590px',width:'500px'}}alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" style= {{height:'590px',width:'500px'}}alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

        
  


    </>
  );
}

export default Home;