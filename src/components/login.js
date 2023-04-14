import {React,useEffect} from 'react';
import '../bootstrap.min.css'
import { useNavigate,Link,Outlet } from 'react-router-dom';
import {useState} from 'react';
import api from "./Axios";
import {useAuth} from './Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login=()=>{
    // useEffect(() => {
    //     document.title = "Login - LifeSaver"; // Change the title here
    //   }, []);
    const navigate=useNavigate()
    const auth = useAuth()
    const[memail,setmemail]=useState("")
    const[pass,setpass]=useState("")
    const login=(e)=>{
        e.preventDefault()
        const sign = {
            memail :memail,
            pass : pass
        }
        api.post("/login",sign)
        .then((response)=>{
            localStorage.setItem("user", JSON.stringify(response.data))
            const na = localStorage.getItem("user")
            const myObject = JSON.parse(na);
            // console.log(myObject)
            toast.success("Signed In Successfully!!!")
            // console.log(response.data)
            if(myObject.udec)
            {
            setTimeout(()=>{
                navigate("/donated")
            },3000)
            }
            else{
                setTimeout(()=>{
                    navigate("/donate")
                },3000)
                }
        })
        .catch((data)=>{
            toast.error(data.response.data)
            // console.log(data.response.data)
            // setps(true)
            // seterr(data.response.data)
            // console.log(" "+data.response.data)
        })

    }
 return(
        
        <div className="dform container">
            <br></br>
             
    <center><h2 id="bold">Login</h2></center>
    <hr></hr>
    <form onSubmit={login}>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6 col-sm-12'> <label>Mobile Number (OR) Email-Id : &ensp;</label>
            <input type="text"  name="memail" placeholder='Mobile No. or Email-Id' className="form-control" required="required" value={memail} onChange={(e)=>setmemail(e.target.value.toLowerCase())}/>
                            <br></br></div></div>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 col-sm-12'><label>Password : </label>
                <input type="password" value={pass} class="form-control" required="required" onChange={(e)=>setpass(e.target.value)}></input></div>
            </div><br></br>
                        <input type="submit" value="Login" className='btn btn-outline-danger margin'></input>
                        <Link to="/forgotpass" className="btn btn-outline-danger">Forgot/Change Password</Link>
<ToastContainer/></form><br></br>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-6'></div>
                            <p>Already a user ?</p>
                        </div>
                       
                        <button id="loginbutton"className="btn btn-success"  onClick={()=>navigate("/signup")}>Signup</button>
                       
        </div>
    )
}