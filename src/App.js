import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Donate } from './components/donate';
import { Main } from './components/Main';
import Need from './components/Need';
import { Navs } from './components/Navbar';
import Success from './components/Success';
import api from './components/Axios';
import Forgot from './components/Forgot';
import Newpass from './components/Newpass';
import { Signup } from './components/Signup';
import { Login } from './components/login';
import Donated from './components/Donated';
import Profile from './components/Profile';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      
              <Routes>
                <Route path="/" element={<><Navs/><Main/><Footer /></>}></Route>
                <Route path="/donate" element={<><Navs/><Donate/><Footer /></>}></Route>
                <Route path="/donated" element={<><Navs/><Donated/><Footer /></>}></Route>
                <Route path="/signup" element={<><Navs/><Signup/><Footer /></>}></Route>
                <Route path="/login" element={<><Navs/><Login/></>}></Route>
                <Route path="/forgotpass" element={<Forgot />}></Route>
                <Route path="/changepass" element={<Newpass />}></Route>
                <Route path="/need" element={<><Navs/><Need/><Footer /></>}></Route>
                <Route path='/profile' element={<><Navs/><Profile></Profile></>}></Route>
              </Routes>
     
    </div>
  );
}

export default App;
