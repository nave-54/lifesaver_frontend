import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Donate } from './components/donate';
import { Main } from './components/Main';
import  Auth  from './components/Auth';
import Need from './components/Need';
import { Navs } from './components/Navbar';
import Success from './components/Success';
import api from './components/Axios';
import Forgot from './components/Forgot';
import Newpass from './components/Newpass';
import { Signup } from './components/Signup';
import { Login } from './components/login';
import Donated from './components/Donated';
function App() {
  return (
    <div>
      <Auth>
              <Routes>
                <Route path="/" element={<><Navs/><Main/></>}></Route>
                <Route path="/donate" element={<><Navs/><Donate/></>}></Route>
                <Route path="/donated" element={<><Navs/><Donated/></>}></Route>
                <Route path="/signup" element={<><Navs/><Signup/></>}></Route>
                <Route path="/login" element={<><Navs/><Login/></>}></Route>
                <Route path="/forgotpass" element={<Forgot />}></Route>
                <Route path="/changepass" element={<Newpass />}></Route>
                <Route path="/need" element={<><Navs/><Need/></>}></Route>
                <Route path='/success' element={<Success />}></Route>
              </Routes>
      </Auth>
    </div>
  );
}

export default App;
