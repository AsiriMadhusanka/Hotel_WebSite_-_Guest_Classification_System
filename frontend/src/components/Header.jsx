import React from "react";
import "./Header.css";
import AdminSlider from "./SliderAdmin";
import logo from "../images/logo.png";
import useUser from "../services/UserContext";
import { AiOutlineLogin } from "react-icons/ai";
import useRequest from "../services/RequestContext";
import { useHistory } from "react-router-dom";
import Notification from "./Notification";

function Header() {
  const { user } = useUser();
  console.log("User", user);

  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/login");
    window.location.reload(true);
  }; 

  if (user == undefined) {
    return (
      <>
        <div className="conatiner"> {/* ----------------------- When there is no login opportunity */}
          <div className="header">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>
              <a href="/">
                Menus
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/login">
                {/* My Profile */}
              </a>
              {/* <Notification/> */}
              {/* <a href="/login"> */}
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Login/Sign up</button>
              {/* </a> */}
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Customer") { //  ------------------- When there is a Customer login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            
            <a href="/"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>
              <a href="/Note">
                Menus
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <Notification/>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else { //  --------------------------------------------------- When there is an admin login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            {/* <AdminSlider /> */}
            <a href="/AuthenticationManagement"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/AuthenticationManagement">
                Home
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
