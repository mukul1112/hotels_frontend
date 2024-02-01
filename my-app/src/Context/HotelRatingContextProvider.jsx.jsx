import React, { useState } from "react";
import HotelRatingContext from "./HotelRatingContext";

const HotelRatingContextProvider=({children})=>{
const [Hotel,setHotel]=useState(null);
    return(
     <HotelRatingContext.Provider value={{Hotel,setHotel}}>
      {children}
    </HotelRatingContext.Provider>
    )

}
export default HotelRatingContextProvider