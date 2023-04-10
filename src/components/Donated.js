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
    
    const [data,setData] = useState([])
    useEffect(() => {
        const na = localStorage.getItem("user")
    const myObject = JSON.parse(na);
    const obj ={
        pno : myObject.upno
    }
    console.log(myObject.upno)
        api.post("/donated",obj)
        .then(res=>{
            setData(res.data);
            console.log(res.data)
    
        })
        .catch(data=>{
            console.log("NOt")
        })
      }, []);
//     const [name,setname] = useState("")
//     const [pn,setpn] = useState("")
//     const [dob,setdob] = useState("")
//     const [email,setemail] = useState("")
//     const [anum,setanum] = useState("")
//     const [gen,setgen] = useState("Select")
//     const [st,setst] = useState("Select")
//     const [dis,setdis] = useState("Select")
//     const [weight,setweight] = useState("")
//     const [bgrp,setbgrp] = useState("Select")
//     const [add,setadd] = useState("")
//     const [pin,setpin] = useState("")
    
    
    
  return (
    <div className="container">
            <br></br>
            <center>
            <h2 className="dform">DONATION FORM</h2>
            <hr></hr>
            <form className="dform">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
                <lable>Name :  </lable>
                <input type="text" disabled placeholder="Eg: Ram" value={data[0].name} className="form-control"></input>
                <br></br>
               </div>
                <div className="col-md-4 col-sm-12">
                <lable>Email Id :  </lable>
                <input type="text" disabled placeholder=" Eg: abc@gmail.com" value={data[0].email} className="form-control"></input>
                <br></br>
                </div>
                
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
                <lable>Phone Number : </lable>
                <input typr="text" disabled placeholder="8888888888" className="form-control" value={data[0].pno}></input>
                <br></br></div>
                <div className="col-md-4 col-sm-12">
                <lable>Aadhaar Number : (Optional)</lable>
                <input type="text" placeholder="0000 0000 0000" disabled className="form-control" value={data[0].anum}></input>
                <br></br></div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-3 col-sm-12"><lable>Date Of Birth : </lable>
                <input type="date" value={data[0].dob} className="form-control" disabled></input>
                </div>
                <div className="col-md-3 col-sm-12">
                <lable>Blood Group : </lable>
                <select value={data[0].bgrp} disabled className="form-control">
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
                </div>
                <div className="col-md-2">
                    <label>Weight (Kgs) : </label>
                    <input type="text" placeholder="50kg and above" disabled value={data[0].weight} className="form-control"></input>
                    <br></br>
                </div>
             </div>
             <div className="row">
             <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
             <lable>Gender : &ensp;</lable>
            <input type="text" value={data[0].gen} disabled></input>
                <br></br>
            </div>
            <div className="col-md-4 col-sm-12">
            <lable>State : </lable>
            <input type="text" value={data[0].state} disabled></input>
               
                <br></br>
            </div>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 col-sm-12">
             
            <div className="col-md-12 col-sm-12">
            <lable>District : </lable>
                <select className="form-control" required = "required" value={data[0].dist}>
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
                <input type="text" required = "required" placeholder="Enter Pincode" className="form-control" value={data[0].pin}></input>
                <br></br>
                </div>
               </div>
               <div className="col-md-4 col-sm-12">
                <lable>Address : (Optional)</lable>
                <br></br>
                <textarea placeholder="Enter your Permanent Address : " rows="5" cols="500" className="form-control" value={data[0].add}></textarea>
                <br></br>
                </div></div>
                <input type="submit" value="Submit" className="btn btn-primary"></input><ToastContainer />
            <br></br><br></br></form>
            </center>
        </div>
  
  )
}

export default Donated
