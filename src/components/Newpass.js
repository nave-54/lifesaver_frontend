import React from 'react'
import '../bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import api from "./Axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Newpass = () => {
    const navigate = useNavigate()
    const name  = localStorage.getItem("femail")
    const [newpass,setnewpass] = useState("")
    const [rnewpass,setrnewpass] = useState("")
    const passchange=()=>{
        
        if(newpass.length>=8 && newpass.length<=16)
        {
            const result = window.confirm('Are you sure you want to Change Password ?');
            if(result)
            {
                const obj ={
                    memail : name,
                    npass : newpass,
                    cnpass : rnewpass
                }
                api.post("/newpass",obj)
                .then(response=>{
                    toast.success(response.data)
                    localStorage.removeItem("femail",response.data)
                    // console.log(response.data)
                    setTimeout(()=>{
                        navigate("/login")
                    },3000)
                })
                .catch(data=>{
                    toast.error(data.response.data)
                })
            }
            
        }
        else{
            toast.error("Password Must be 8-16 Characters")
            // console.log("Error")
        }
    }
    
  return (
    <div className='container dform mx-auto'>
       <br></br>
        
             <center><h2 id="bold">Change Password</h2></center>
             <hr></hr>
             <div><div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Email (OR) Phone Number :</label>
      <input type="text" disabled className="form-control" value={name}></input></div></div>
      <br></br>
      <div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Enter new Password : </label>
      <input type="password" className="form-control" value={newpass} onChange={(e)=>setnewpass(e.target.value)}></input></div></div>
      <br></br>
      <div className='row'><div className='col-md-4'></div><div className='col-md-4'><label>Re-Enter new Password : </label>
      <input type="password" className="form-control" value={rnewpass} onChange={(e)=>setrnewpass(e.target.value)}></input></div></div>
      <br></br><button className='btn btn-primary' onClick={passchange}>Change</button><ToastContainer />
      <br></br>
      </div></div>
  )
}

export default Newpass
