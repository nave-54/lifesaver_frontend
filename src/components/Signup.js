import React from 'react';
import '../bootstrap.min.css'
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';
import api from "./Axios";
// import axios from '../Axios/Axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Signup=()=>{
    const navigate=useNavigate()
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    const [cpass,setcpass]  =useState("")
    const[mno,setmno]=useState("")
    const sign=(e)=>{
        e.preventDefault()
        if(mno.length!=10)
        {
            toast.error("Enter A valid Phone Number")
        }
        else
        {
        const signup = {
            name : name,
            mno : mno,
            email : email,
            pass : pass,
            cpass:cpass
        }
        console.log(email);
        api.post("/signup",signup)
        .then((response)=>{
            console.log("Success")
            toast.success(response.data)
            setTimeout(() => {
                navigate('/login');
              }, 3000);
        })
        .catch(data=>{
            console.log("kiii")
            console.log(data.response.data)
            toast.error(data.response.data)
        })
    }
    }
 return(
        
        <div className="dform container">
            <br></br>
            
    <center><h2 id="bold">Signup</h2></center>
    <hr></hr>
    <form onSubmit={sign}>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4 col-sm-12'> <label>Name : &ensp;</label>
                            <input type="text" name="name" placeholder='Eg:Ram' className="form-control" required="required" value={name} onChange={(e)=>setname(e.target.value.toUpperCase())}/>
                            <br></br></div><div className='col-md-4 col-sm-12'><label>MobileNo : &ensp;</label>
                            <input type="text"  name="mno" placeholder='8888888888' className="form-control" required="required" value={mno} onChange={(e)=>setmno(e.target.value)}/>
                            <br></br></div> </div>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className="col-md-6 col-sm-12"><label>Email (Optional) : </label>
                            <input type="email" className="form-control" name="Email" placeholder='Eg: abc@gmail.com' value={email} onChange={(e)=>setemail(e.target.value.toLowerCase())}/></div>
                            <div className='col-md-2'></div></div>
                            <br></br>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-4 col-sm-12'><label>Password   :</label>
                            <input type="password" required="required" name="Password" placeholder='Password Must be 8-16 Characters' className="form-control" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                      <br></br></div>
                      <div className='col-md-4 col-sm-12'>
                            <label>Re-Enter Password   :</label>
                            <input type="password" required="required" name="Password" placeholder='Password Must be 8-16 Characters' className="form-control" value={cpass} onChange={(e)=>setcpass(e.target.value)}/>
                        <br></br></div>
                        </div>
                        <div><input type="submit" className='btn btn-outline-danger' value="Signup"></input>
                        <br></br><br></br></div><ToastContainer/></form>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-6'></div>
                            <p>Already a user ?</p>
                        </div><div>
                        <button id="loginbutton"className="btn btn-success" onClick={()=>navigate("/login")}>Login</button>
                        </div>
                        
        </div>
    )
}