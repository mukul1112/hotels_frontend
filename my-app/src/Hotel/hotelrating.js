import React from "react"
import UserContext from "../Context/usercontext";
import { useContext } from "react";
import HotelRatingContext from "../Context/HotelRatingContext";



function HotelRating() {
    const { Hotel } = useContext(HotelRatingContext)
    console.log(Hotel)

    return (
        <>

            <div className="container-xl">
                <div className="row ">
                    <div className="col col-lg-6">
                        <div class="card  my-2 p-3" >
                            <img src={Hotel.imageLink} class="card-img-top rounded img-thumbnail img-fluid h-75" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title my-8">{Hotel.hotelname}</h5>
                                <p class="card-text my-8">{Hotel.about}</p>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Remark</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="remarks" />
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">rating</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="ratings" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default HotelRating;