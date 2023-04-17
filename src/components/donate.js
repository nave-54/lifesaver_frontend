import {React,useState,useContext} from "react";
import '../style.css'
import "../bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import api from "./Axios";
import '../mystyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
export function Donate()
{
    const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
    // console.log(myObject)
    const [name,setname] = useState("")
    const [id,setid] = useState("")
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
    const [data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
       
            document.title = "Donate - LifeSaver"; // Change the title here
        
        if(myObject!=null)
        {
            setid(myObject.uid)
            setname(myObject.uname)
            setemail(myObject.uemail)
            setpn(myObject.upno)
        }
    },[])
    // if(myObject===null)
    // {
    //     return(<div>
    //         <h1>Please Login and Donate</h1>
    //     </div>)
    // }
    
    const donate =(e)=>
    {
        e.preventDefault()
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
        else{
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
        // console.log(store)
        axios.post("https://lifesaver.onrender.com/donate",store)
        .then(res=>{
            toast.success("Thanks... Successfully stored..")
            setTimeout(()=>{
                navigate("/need")
            },3000)
    })
        // console.log(bgrp)
    }
    }
    return(
        <div className="container">
            {myObject===null?<div><br></br><br></br><h1 className="dform mx-auto">Please Login and donate redirecting... </h1>{setTimeout(()=>{
                navigate("/login")
            },3000)}</div>:<div>
            <br></br>
            <center>
            <h2 className="dform">DONATION FORM</h2>
            <hr></hr>
            <form className="dform" onSubmit={donate}>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
                <lable>Name :  </lable>
                <input type="text" disabled placeholder="Eg: Ram" required = "required" value={name} className="form-control" onChange={(e)=>{setname(e.target.value)}}></input>
                <br></br>
                </div>
                <div className="col-md-4 col-sm-12">
                <lable>Email Id :  </lable>
                <input type="text" disabled required = "required" placeholder=" Eg: abc@gmail.com" value={email} className="form-control" onChange={(e)=>{setemail(e.target.value)}}></input>
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
                <input type="text" placeholder="0000 0000 0000" className="form-control" value={anum} onChange={(e)=>{setanum(e.target.value)}}></input>
                <br></br></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-3 col-sm-12"><lable>Date Of Birth : </lable>
                <input type="date" required = "required" value={dob} className="form-control" onChange={(e)=>{setdob(e.target.value)}}></input>
                <br></br></div>
                <div className="col-md-3 col-sm-12">
                <lable>Blood Group : </lable>
                <select value={bgrp} required = "required" className="form-control" onChange={(e)=>{setbgrp(e.target.value);
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
                </select><br></br>
                </div>
                <div className="col-md-2">
                    <label>Weight (Kgs) : </label>
                    <input type="text" required = "required" placeholder="50kg and above" value={weight} className="form-control" onChange={(e)=>{setweight(e.target.value)}}></input>
                    <br></br>
                </div>
             </div>
             <div className="row">
             <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
             <lable>Gender : &ensp;</lable>
             <select value={gen} required = "required" className="form-control" onChange={(e)=>{setgen(e.target.value)}}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
             </select>
                <br></br>
            </div>
            <div className="col-md-4 col-sm-12">
            <lable>State : </lable>
                <select className="form-control" required = "required" value={st} onChange={(e)=>{setst(e.target.value);e.preventDefault()}}>
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
                <select className="form-control" required = "required" value={dis} onChange={(e)=>{setdis(e.target.value);e.preventDefault()}}>
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
                <input type="text" required = "required" placeholder="Enter Pincode" className="form-control" value={pin} onChange={(e)=>{setpin(e.target.value)}}></input>
                <br></br>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
                <lable>Address : (Optional)</lable>
                <br></br>
                <textarea placeholder="Enter your Permanent Address : " rows="5" cols="500" className="form-control" value={add} onChange={(e)=>{setadd(e.target.value.toLowerCase())}}></textarea>
                <br></br>
                </div></div>
                <input type="submit" value="Submit" className="btn btn-primary"></input><ToastContainer />
            <br></br><br></br></form>
            </center>
        </div>}</div>
    )
    

}