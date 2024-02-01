
import './App.css';

import Navbar from './component/navbar';
import Home from './Pages/Home';
import Login from './User/login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Router from './component/routing';
import Card from './User/viewuser';
import UsercontextProvider from './Context/userContextprovider';
import HotelRatingContextProvider from './Context/HotelRatingContextProvider.jsx'

function App() {
  return (
    <>
      
    <UsercontextProvider>
     <HotelRatingContextProvider>
    <Router/>
    </HotelRatingContextProvider> 
    </UsercontextProvider>

        
    
    </>
     
       
  );
}

export default App;
