import Home from '../Pages/Home';
import Login from '../User/login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Card from '../User/viewuser';
import ViewHotel from '../Hotel/ViewHotels';
import AddnewHotel from '../Hotel/Addnewhotel';
import AdminHome from '../Pages/AdminHome';
import Authenticateuser from '../User/Authenticateuser';
import HotelRating from '../Hotel/hotelrating';


function Router() {
    return (
        <>
         <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adduser' element={<Login/>}></Route>
      <Route path='/userinfo' element={<Card/>}></Route>
      <Route path='/addhotel' element={<ViewHotel/>}></Route>
      <Route path='/addnewhotel' element={<AddnewHotel/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/userauthentication' element={<Authenticateuser/>}></Route>
      <Route path='/ratehotel'element={<HotelRating/>}></Route>
     </Routes>
     </BrowserRouter>
        </>
      );
}

export default Router;