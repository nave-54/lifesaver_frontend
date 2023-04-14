import {React,useState,useContext,useEffect} from "react";
import '../style.css'
import "../bootstrap.min.css";
import {useAuth} from './Auth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import api from "./Axios";
import '../mystyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Donated = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const [name,setname] = useState("")
      const [pn,setpn] = useState("")
      const [dob,setdob] = useState("")
      const [email,setemail] = useState("")
      const [anum,setanum] = useState("")
      const [gen,setgen] = useState("Select")
      const [st,setst] = useState("Select")
      const [dis,setdis] = useState("Select")
      const [weight,setweight] = useState("")
      const [bgrp,setbgrp] = useState("Select")
      const [add,setadd] = useState("")
      const [pin,setpin] = useState("")
      const [btn,setbtn] = useState(true)
      const [disabled,setdisabled] = useState(true)
      const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
    const load=async()=>{
        // console.log("Loaded")
        const obj ={
            pno : myObject.upno
        }
        await api.post("/donated",obj)
        .then(res=>{
            // console.log(res.data[0])
            if(res.data!=null)
        {
            setname(res.data[0].name)
            setpn(res.data[0].pno)
            setemail(res.data[0].email)
            setdob(res.data[0].dob)
            setanum(res.data[0].anum)
            setst(res.data[0].state)
            setgen(res.data[0].gen)
            setpin(res.data[0].pin) 
            setdis(res.data[0].dist)
            setweight(res.data[0].weight)
            setadd(res.data[0].addrs)
            setbgrp(res.data[0].bgrp)
        }
        })
        .catch(data=>{
            // console.log("fact")
            setbtn(true)
            setdisabled(true)
        })


    }
    useEffect(() => {
        
            document.title = "Donate - LifeSaver"; // Change the title here
          
        load();
               
      },[]);
    const edit=(event)=>{
        event.preventDefault()
        if(bgrp==="Select")
        {
            toast.error("Blood Group Not Selected")
            
        }
        else if(gen==="Select")
        {
            toast.error("Gender Not Selected")
        }
        else if(st==="Select")
        {
            toast.error("State Not Selected")
        }
        else if(dis==="Select")
        {
            toast.error("District Not Selected")
        }
        else if(anum.length>0 && anum.length!=12)
        {   
            toast.error("Enter Valid Aadhaar Number")
        }
        else if(weight<50)
        {
            toast.error("Weight greater than 50kgs")
        }
        else if(pin.length!=6)
        {
            toast.error("Enter Valid Pincode")
        }
        else
        {
        const store = {
            id : myObject.uid,
            name : name,
            pno : pn,
            email : email,
            dob : dob,
            anum : anum,
            bgrp : bgrp ,
            weight : weight ,
            gen : gen,
            state : st,
            dist : dis,
            pin : pin,
            addrs : add
        }
        api.post("/donate",store)
        .then((response)=>{
           
                toast.success("Successfully Updated")
                setdisabled(true)
                setbtn(true)
                setTimeout(()=>{
                    navigate("/need")
                },3000)
                
           
        })
        .catch(()=>{
            toast.error("Please Enter the corect data")
        })
    }
    }
  return (
    
    <div className="container">
        {myObject===null?<div><br></br><br></br><h1 className="dform mx-auto">Please Login and donate redirecting... </h1>{setTimeout(()=>{
                navigate("/login")
            },3000)}</div>:<div>
            <br></br>
            <center>
            <h2 className="dform">DONATION FORM</h2>
            <hr></hr>
            <form className="dform" onSubmit={edit}>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
                <lable>Name :  </lable>
                <input type="text" disabled placeholder="Eg: Ram" required = "required" value={name} className="form-control" onChange={(e)=>{setname(e.target.value.toUpperCase())}}></input>
                <br></br>
                </div> 
                <div className="col-md-4 col-sm-12">
                <lable>Email Id :  </lable>
                <input type="text" disabled required = "required" placeholder=" Eg: abc@gmail.com" value={email} className="form-control" onChange={(e)=>{setemail(e.target.value.toLowerCase())}}></input>
                <br></br>
                </div>
                
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
                <lable>Phone Number : </lable>
                <input typr="text" disabled required = "required" placeholder="8888888888" className="form-control" value={pn} onChange={(e)=>{setpn(e.target.value)}}></input>
                <br></br></div>
                <div className="col-md-4 col-sm-12">
                <lable>Aadhaar Number : (Optional)</lable>
                <input type="text" disabled={disabled} placeholder="0000 0000 0000" className="form-control" value={anum} onChange={(e)=>{setanum(e.target.value)}}></input>
                <br></br></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-3 col-sm-12"><lable>Date Of Birth : </lable>
                <input type="date" disabled={disabled} required = "required" value={dob} className="form-control" onChange={(e)=>{setdob(e.target.value)}}></input>
                <br></br></div>
                <div className="col-md-3 col-sm-12">
                <lable>Blood Group : </lable>
                <select value={bgrp} disabled={disabled} required = "required" className="form-control" onChange={(e)=>{setbgrp(e.target.value);
                }}>
                    <option>Select</option>
                    <option>A positive (A+)</option>
                    <option>A negative (A-)</option>
                    <option>B positive (B+)</option>
                    <option>B negative (B-)</option>
                    <option>O positive (O+)</option>
                    <option>O negative (O-)</option>
                    <option>AB positive (AB+)</option>
                    <option>AB negative (AB-)</option>
                </select>
                <br></br>
                </div>
                <div className="col-md-2">
                    <label>Weight (Kgs) : </label>
                    <input type="text" disabled={disabled} required = "required" placeholder="50kg and above" value={weight} className="form-control" onChange={(e)=>{setweight(e.target.value)}}></input>
                    <br></br>
                </div>
             </div>
             <div className="row">
             <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
             <lable>Gender : &ensp;</lable>
             <select value={gen} disabled={disabled} required = "required" className="form-control" onChange={(e)=>{setgen(e.target.value)}}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
             </select>
                <br></br>
            </div>
            <div className="col-md-4 col-sm-12">
            <lable>State : </lable>
                <select className="form-control" disabled={disabled} required = "required" value={st} onChange={(e)=>{setst(e.target.value);e.preventDefault()}}>
                    <option>Select</option>
                    <option>TamilNadu</option>
                </select>
               
                <br></br>
            </div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
             
            <div className="col-md-12 col-sm-12">
            <lable>District : </lable>
                <select className="form-control" disabled={disabled} required = "required" value={dis} onChange={(e)=>{setdis(e.target.value);e.preventDefault()}}>
                    <option>Select</option>
                <option>	Ariyalur	</option>
                <option>	Chengalpattu	</option>
                <option>	Chennai	</option>
                <option>	Coimbatore	</option>
                <option>	Cuddalore	</option>
                <option>	Dharmapuri	</option>
                <option>	Dindigul	</option>
                <option>	Erode	</option>
                <option>	Kallakurichi	</option>
                <option>	Kanchipuram	</option>
                <option>	Kanyakumari	</option>
                <option>	Karur	</option>
                <option>	Krishnagiri	</option>
                <option>	Madurai	</option>
                <option>	Mayiladuthurai	</option>
                <option>	Nagapattinam	</option>
                <option>	Namakkal	</option>
                <option>	Nilgiris	</option>
                <option>	Perambalur	</option>
                <option>	Pudukkottai	</option>
                <option>	Ramanathapuram	</option>
                <option>	Ranipet	</option>
                <option>	Salem	</option>
                <option>	Sivaganga	</option>
                <option>	Tenkasi	</option>
                <option>	Thanjavur	</option>
                <option>	Theni	</option>
                <option>	Thoothukudi	</option>
                <option>	Tiruchirappalli	</option>
                <option>	Tirunelveli	</option>
                <option>	Tirupattur	</option>
                <option>	Tiruppur	</option>
                <option>	Tiruvallur	</option>
                <option>	Tiruvannamalai	</option>
                <option>	Tiruvarur	</option>
                <option>	Vellore	</option>
                <option>	Viluppuram	</option>
                <option>	Virudhunagar	</option>

                </select>
                <br></br>
                
                </div>
                <div className="col-md-12 col-sm-12">
                <lable>Pincode : </lable>
                <input type="text" disabled={disabled} required = "required" placeholder="Enter Pincode" className="form-control" value={pin} onChange={(e)=>{setpin(e.target.value)}}></input>
                <br></br>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
                <lable>Address : (Optional)</lable>
                <br></br>
                <textarea disabled={disabled} placeholder="Enter your Permanent Address : " rows="5" cols="500" className="form-control" value={add} onChange={(e)=>{setadd(e.target.value.toLowerCase())}}></textarea>
                <br></br>
                </div></div>
                {btn?<button className="btn btn-primary" onClick={()=>{
                    setbtn(!btn)
                    setdisabled(!disabled)
                }}>Edit</button>:<input type="submit" className="btn btn-danger" value="Submit"></input>}
            <br></br><br></br></form><ToastContainer />
            </center>
        </div>}</div>
  
  )
}

export default Donated
