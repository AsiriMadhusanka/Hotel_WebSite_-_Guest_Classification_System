import React, { Component } from 'react'
import Card from './Card';
import Video from './Video';
import img1 from '../images/slide_img01.png';
import img2 from '../images/slide_img02.png';
import img3 from '../images/slide_img03.png';
import img4 from '../images/slide_img04.png';
import img5 from '../images/slide_img05.png';

export default class Home1 extends Component {
  render() {
    return (
      <div>


        
      {/* Create home page slide show */}
      <div  style = {{marginTop:"10px", marginRight:"10px", marginLeft:"10px", marginBottom:"10px"}}>
          
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            
            <div className="carousel-inner" >
        
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
            
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."  />
              </div>
            
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." s/>
              </div>

              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item">
                <img src={img5} className="d-block w-100" alt="..." />
              </div>
              
            </div>
          </div>
        </div>

        <Card />
        <Video />

        





      </div>
    )
  }
}
