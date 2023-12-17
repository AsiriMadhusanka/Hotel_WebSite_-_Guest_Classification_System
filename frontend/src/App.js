import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";
import Predictor from "./components/predictor";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Home1 from "./components/Home1";
import Home2 from "./components/Home2";

import Signin from "./pages/AuthenticationManagement/Signin";
import Profile from "./pages/AuthenticationManagement/Profile";
import AuthenticationManagement from "./pages/AuthenticationManagement/AuthenticationManagement";
import All_Data from "./pages/AuthenticationManagement/All_Data";
import All_Edit_Data from "./pages/AuthenticationManagement/All_Edit_Data";
import Add_Customer from "./pages/AuthenticationManagement/Add_Customer";
import Add_Admin from "./pages/AuthenticationManagement/Add_Admin";
import AuthenticationReport from "./pages/AuthenticationManagement/AuthenticationReport";
import Categories from "./components/Categories";

import Note from "./pages/Customer/List_Notes";


import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import Verification from "./pages/AuthenticationManagement/Verification";

import Add_Note from "./pages/Customer/Add_Note";
import UpdateEnroll from "./pages/Customer/UpdateEnroll";

export default class App extends Component {
    render() {
      return (
        <RequestContextProvider baseURL={"http://localhost:8000/"}>
          <UserContextProvider>
            <BrowserRouter>
            <Header />
              <div style={{ backgroundColor: "#ffff", margin: "0" }}>

                    <Route path="/" exact component={Home1} />
                    <Route path="/Home2" exact component={Home2} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/Profile" exact component={Profile} />
                    <Route path="/AuthenticationManagement" exact component={AuthenticationManagement} />
                    <Route path="/All_Data" exact component={All_Data} /> 
                    <Route path="/alledit/:id" exact component={All_Edit_Data} />
                    <Route path="/Add_Customer" exact component={Add_Customer} />
                    <Route path="/Add_Admin" exact component={Add_Admin} />
                    <Route path="/AuthenticationReport" exact component={AuthenticationReport} /> 

                    <Route path="/Categories" exact component={Categories} />
                    <Route path="/Predictor" exact component={Predictor}/>
                    {/* <Route path="/Registration" exact component={Registration} />  */}

                     

                    {/* <Route path="/AdminDashboard" exact component={AdminDashboard} /> */}
                    <Route path="/AboutUs" exact component={AboutUs} />
                    <Route path="/ContactUs" exact component={ContactUs} />

                    <Route path="/verification" exact component={Verification} />

                    <Route path="/Note" exact component={Note}/>
                    <Route path="/Add_Note" exact component={Add_Note}/>
                    <Route path="/UpdateEnroll/:id" exact component={UpdateEnroll}/>

                  <Footer />
              </div>
            </BrowserRouter>
          </UserContextProvider>
        </RequestContextProvider>
      );
    }
}
  