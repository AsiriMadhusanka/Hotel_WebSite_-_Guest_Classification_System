import React, { Component } from 'react'
import './Card.css'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

export default class Card extends Component {
  render() {
    return (
    <div >

        <div class="container">
            <div class="row hidden-md-up">
            {/* 01 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                        <img src={image1} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Foods  </h1>
                            <h5 className="card-title"></h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> Menu </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 02 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                        <img src={image2} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Beverages </h1>
                            <h5 className="card-title"></h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> Menu </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 03 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                        <img src={image3} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Liquor </h1>
                            <h5 className="card-title"></h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> Menu </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 04 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                        <img src={image4} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Cocktail</h1>
                            <h5 className="card-title"></h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> Menu </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>


            
            </div>
            <br/>
        </div>
    </div>
    )
  }
}
