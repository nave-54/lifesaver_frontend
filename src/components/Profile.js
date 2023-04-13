import {React,useEffect} from 'react';
import { Link} from 'react-router-dom';
import '../bootstrap.min.css'
import { Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import api from "./Axios";
// import axios from '../Axios/Axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
   const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
  const navigate = useNavigate()
  const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    const [cpass,setcpass]  =useState("")
    const[mno,setmno]=useState("")
    const [disabled,setdisabled] = useState(true)
    const [edit,setedit] = useState(true)
   useEffect(()=>{
    setname(myObject.uname)
    setmno(myObject.upno)
    setemail(myObject.uemail)
   },[])
   const update=(e)=>{
    e.preventDefault()
        const obj ={
          id : myObject.uid,
          name : name,
          mno : mno,
          email : email
        }
        api.post("/update",obj)
        .then(res=>{
          toast.success("Profile Successfully Updated")
          toast.success("Please Login Again Redirecting...")
          setTimeout(() => {
            
            localStorage.removeItem("user")
            navigate("/login")
          }, 2000);
          setedit(false)
          setdisabled(true)
          
        })
        .catch(data=>{
          toast.error(data.response.data)
        })

   }
  return (
    <div className="dform container">
    <br></br>
    
<center><h2 id="bold">Profile</h2></center>
<hr></hr>
   <form onSubmit={update}>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4 col-sm-12'> <label>Name : &ensp;</label>
                            <input type="text" name="name" disabled={disabled} placeholder='Eg:Ram' className="form-control" required="required" value={name} onChange={(e)=>setname(e.target.value.toUpperCase())}/>
                            <br></br></div><div className='col-md-4 col-sm-12'><label>MobileNo : &ensp;</label>
                            <input type="text"  name="mno" disabled={disabled} placeholder='8888888888' className="form-control" required="required" value={mno} onChange={(e)=>setmno(e.target.value)}/>
                            <br></br></div></div>
                            <div className='row'>
                                <div className='col-md-3'></div>
                                <div className="col-md-6 col-sm-12"><label>Email (Optional) : </label>
                            <input type="email" className="form-control" disabled={disabled} name="Email" placeholder='Eg: abc@gmail.com' value={email} onChange={(e)=>setemail(e.target.value.toLowerCase())}/></div>
                            <div className='col-md-2'></div></div>
                            <br></br>
                        <div>{edit?<button className='btn btn-outline-danger' onClick={()=>{
                          setedit(false)
                          setdisabled(false)
                        }}>Edit Profile</button>:<div><Link id="loginbutton"className="btn btn-success" to="/forgotpass">Change Password</Link><br></br><br></br><input type="submit" className='btn btn-outline-danger margin' value="Update Profile"></input>
                        <button className="btn btn-outline-danger margin" onClick={()=>{
                          setedit(true)
                          setdisabled(true)
                        }}>Back</button></div>}
                        <Outlet />
                        </div><ToastContainer/></form><div>
                        
                        </div>
                        
        </div>
    
  )
}

export default Profile
