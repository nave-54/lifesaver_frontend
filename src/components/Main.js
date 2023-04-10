import React from 'react'
import {Donate} from "./donate"
import { useNavigate } from 'react-router-dom'
import img1 from './images/1.png'
export function Main ()
{
    const navigate = useNavigate()
        return(
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                <br></br>
                <h3><button onClick={()=>(navigate('/donate'))}>Willing To Donate</button></h3>
                <h3><button onClick={()=>(navigate('/need'))}>Need Blood!!!</button></h3>
            </div>
        )
    
}