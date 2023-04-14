import {React,useEffect} from 'react'
import {Donate} from "./donate"
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import img1 from './images/1.jpg'
import img2 from './images/2.png'
import img3 from './images/3.jpg'
import img4 from './images/donationFact.webp'
export function Main ()
{
  useEffect(() => {
    document.title = "Home - LifeSaver"; // Change the title here
  }, []);
    const navigate = useNavigate()
        return(
            <div className='container-fluid dform'>
              <Carousel>
      <Carousel.Item>
        <img
          className="w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={img2}
          alt="Second slide"
          
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
               
                <div className='row'>
                 
                  <div className='col-md-6 col-sm-6'>
                  <div class="d-grid gap-2"><button class="btn btn-outline-danger" onClick={()=>(navigate('/donate'))} type="button">Willing to donate blood</button></div><br></br></div>
                  <div className='col-md-6 col-sm-6'>
                  <div class="d-grid gap-2"><button class="btn btn-outline-danger" onClick={()=>(navigate('/need'))} type="button">Need Blood</button></div></div>
</div> 
<hr></hr>
<div className='row'>
      <div className='col-md-6 col-sm-12'>
    <img
          className="w-100 img-thumbnail"
          src={img4}
          alt="First slide"
        />
        <br></br>
        <br></br>
        <h5 className='alert alert-danger'>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</h5>
        </div>
        <div className='dform col-md-6 col-sm-12'>
        <table class="table table-responsive  ">
            <tbody>
              <tr className='dform'>
                <th colspan="3">Compatible Blood Type Donors</th>
              </tr>
              <tr className='dform'>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr className='dform'>
                <td>A+</td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr className='dform'>
                <td>O+</td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr className='dform'>
                <td>B+</td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr className='dform'>
                <td>AB+</td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr className='dform'>
                <td>A-</td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr className='dform'>
                <td>O-</td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr className='dform'>
                <td>B-</td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr className='dform'>
                <td>AB-</td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
                
</div>
        )
    
}