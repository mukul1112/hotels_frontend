
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HotelRatingContext from "../Context/HotelRatingContext";


function Card({ data }) {
   const {setHotel}=useContext(HotelRatingContext);
   const hotelrating=(data)=>{
      setHotel(data)
   }
    return (
        <>

                      
                    <div class="card  my-2 p-3" >
                    <img src={data.imageLink} class="card-img-top rounded img-thumbnail img-fluid h-75" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{data.hotelname}</h5>
                        <p class="card-text">{data.about}</p>
                        <Link class="btn btn-primary mx-3" onClick={()=>hotelrating(data)} to={"/ratehotel"}>info</Link>
                        <a href="#" class="btn btn-danger  shadow" >Save</a>
                        </div>

                    </div>
                
            



        </>
    );
}

export default Card;