import {React,useState} from "react";
import UserContext from "./usercontext";

const Usercontextprovider=({children})=>{
    const [user,setuser]=useState({});
    
return(
    <UserContext.Provider value={{user , setuser}}>
    {children}
    </UserContext.Provider>
)
}

export default Usercontextprovider;