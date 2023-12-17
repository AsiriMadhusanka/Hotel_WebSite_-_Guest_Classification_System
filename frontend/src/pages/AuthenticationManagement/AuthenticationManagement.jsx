import React, { Component } from 'react';
import { Button } from "antd";
import "./AuthenticationManagement.css"
import Admin from "../../images/Admin.png";
import background from "../../images/background2.jpg";

// Main Admin Dashboard
export default class MainDashboard extends Component {

  render() {
    return (
    <div className style={{backgroundColor: "#c0cdce", backgroundImage: `url(${background})` } } >
        <br/>
    <div className="col-md-8 mt-4 mx-auto">
        <h1 className="text-center" >  Authentication Management </h1> 
        <br/>

        <form onSubmit = { this.onSubmit } className="needs-validation" noValidate >
        

     
        <div class="container">
        <div class="row hidden-md-up">
        {/* 01 */}
                <div className="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Customer" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new Customer </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 02 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Admin" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new admin </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 03 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Details of all Users </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>



<div class="container" style={{marginTop:"15px"}}>
<div class="row hidden-md-up">
        {/* 04 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/AuthenticationReport" style={{ textDecoration: 'none', color: 'Info' }}>
                        Generate Report </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>




                 {/* 03 */}
                 <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Send Customer Notifications </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>


                 {/* 05 */}
                 <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add Food Menu Item </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>

            

                {/* 06 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add Beverage Menu Item </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>

                {/* 05 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add Liquor Menu Item </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>

                {/* 05 */}
                <div class="col-md-4" >
                <div className="card text-center" style = {{backgroundColor:'#000000'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add Cocktail Menu Item </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>




        </div>
        </div>
        </div>
        </div>
        <br/> <br/>
        </form>

    </div> <br/><br/><br/><br/>
    </div>
    )
  }
}