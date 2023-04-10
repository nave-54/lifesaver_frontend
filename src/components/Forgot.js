import React from 'react'
import '../bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import api from "./Axios";
import {useAuth} from './Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Forgot = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const [username,setusername] = useState("")
  const [curpass,setcurpass] = useState("")
  const [fusername,setfusername] = useState("")
  const [pg,setpg] = useState(true)
  const [otp,setotp]  =useState(true)
  const [otphold,setotphold] = useState("")
  const otpverify=()=>
  {
    const obj={
      name : fusername,
      otp : otphold
    }
    console.log(otphold)
    api.post('/verifyotp',obj)
    .then(response=>{
      toast.success(response.data)
      localStorage.setItem("femail",fusername)
      setTimeout(()=>{
        navigate("/changepass")
      },3000)
    })
    .catch(data=>{
      toast.error(data.response.data)
    })
  }
  const otpcall =(e)=>{
    const obj ={
      name : fusername
    }
    api.post("/forgotpassotp",obj)
      .then(response=>{
        toast.success(response.data)
        console.log("ji")
      })
      .catch(data=>{
        setotp(true)
        toast.error(data.response.data)
        console.log("error")
      })
    e.preventDefault()
      setotp(!otp)
      console.log(fusername)
      
  }
  const forgot1=()=>{
    const obj = {
      name : username,
      pass : curpass
    }
    api.post("/forgotpass",obj)
    .then(response=>{
      toast.success(response.data)
      console.log(response.data)
      localStorage.setItem("femail",username);
      setTimeout(()=>{
          navigate("/changepass")
      },3000)
    })
    .catch(data=>{
      toast.error(data.response.data)
      console.log(data.response.data)
    })
  }
  return (
    <div className='container dform mx-auto'>
       <br></br>
        
             <center><h2 id="bold">Forgot Password ?</h2></center>
             <hr></hr>
             {pg?<div><div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Email (OR) Phone Number :</label>
      <input type="text" className="form-control" value={username} onChange={(e)=>setusername(e.target.value)}></input></div></div>
      <br></br>
      <div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Enter Current Password : </label>
      <input type="password" className="form-control" value={curpass} onChange={(e)=>setcurpass(e.target.value)}></input></div></div>
      <br></br>
      <button onClick={forgot1} className="btn btn-success">Submit</button>
      <br></br><br></br>
      <button className="btn btn-danger" onClick={()=>{
        setpg(!pg)
        setotp(true)
      }}>Other ways to Recover</button></div>:<div>
          
      {otp?<div><div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Email (OR) Phone Number :</label>
      <input type="text" className="form-control" value={fusername} onChange={(e)=>setfusername(e.target.value)}></input></div></div>
      <br></br>
      <button className="btn btn-danger margin" onClick={otpcall}>Get Otp !!!</button><button className="btn btn-success" onClick={()=>{
        setpg(!pg)
        setotp(true)
      }}>Back</button></div>:<div>
      <div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Email (OR) Phone Number :</label>
      <input type="text" className="form-control" disabled value={fusername} onChange={(e)=>setfusername(e.target.value)}></input></div></div>
      <br></br><div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Enter Otp : </label>
      <input type="text" className="form-control" placeholder='Please Enter OTP' name={otphold} onChange={(e)=>setotphold(e.target.value)}></input></div></div><br></br><button className="btn btn-danger" onClick={otpverify}>Verify</button><button className="btn btn-success" onClick={()=>{
       setotp(true)
      }}>Back</button></div>}
      
        </div>}
        <ToastContainer />
    </div>
  )
}

export default Forgot
