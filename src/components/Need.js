import {React,useEffect,useState} from 'react'
import '../style.css'
import "../bootstrap.min.css";
import { useAuth,Auth } from './Auth'
import axios from 'axios';
const Need = () => {
    const a = useAuth()
    const lst1 = a.lst
    const [flag,setflag] = useState(false)
    const [bgrp,setbgrp] = useState("")
    const [dis,setdis] = useState("")
    const [data,setData] = useState([])
    const [t1,sett1] = useState([])
    useEffect(()=>{
        api.get('/need')
      .then(res=>{setData(res.data);console.log(res.data)})
     
    },[])
    
  return (
    <div className="dform">
      <br></br>
      <center>
      <h1>VOLUNTEER DONATING DETAILS</h1>
      
      {flag?<div>
        <h2>FILTER</h2>
        <lable>Blood Group : </lable>
                <select value={bgrp} className="form-control w-25" onChange={(e)=>{setbgrp(e.target.value)}}>
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
                <lable>City : </lable>
                <select className="form-control w-25" value={dis} onChange={(e)=>{setdis(e.target.value);e.preventDefault()}}>
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
              <button className="btn btn-primary" onClick={()=>{
                setflag(!flag)
                setbgrp("")
                setdis("")
              }}>Go Back</button>
              <br></br>
      </div>:<button className='btn btn-success' onClick={()=>
      {
        setflag(!flag)
      }}>Filter</button>}
      <br></br>
      {bgrp==="" && dis===""?<div className='table table-responsive'><br></br><table  className="table table-bordered">
        <thead className='table table-dark'>
            <tr>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Date Of Birth</th>
        <th>Blood Group</th>
        <th>State</th>
        <th>District</th>
        <th>Pincode</th>
        </tr>
        </thead>
        {data.map(x=>
         <tr className='dform'>
         <td>{x.name}</td>
         <td>{x.pno}</td>
         <td>{x.dob}</td>
         <td>{x.bgrp}</td>
         <td>{x.state}</td>
         <td>{x.dist}</td>
         <td>{x.pin}</td>
</tr>
          )}
       
        </table>
</div>:<div className='table table-responsive'><table  className="table table-bordered">
        <thead className='table table-dark'>
            <tr>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Date Of Birth</th>
        <th>Blood Group</th>
        <th>State</th>
        <th>District</th>
        <th>Address</th>
        </tr>
        </thead>
        
        {data.map(x=>
            ((bgrp=="" && x.dist===dis)||(x.bgrp===bgrp && dis==="") || (x.bgrp===bgrp && x.dist===dis))?<tr>
              <td>{x.name}</td>
              <td>{x.pno}</td>
              <td>{x.dob}</td>
              <td>{x.bgrp}</td>
              <td>{x.state}</td>
              <td>{x.dist}</td>
              <td>{x.addrs}</td>
     </tr>:""
          )}
        
            
      </table></div>}
      </center>
          </div>

  )
}

export default Need
