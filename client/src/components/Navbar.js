import React, { useState } from "react";
import { Link , } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import { BsBricks } from 'react-icons/bs';
import { Button } from "@mui/material";
import "./Button.css";
import {useSelector , useDispatch} from "react-redux";
import {logout} from "../redux/actions/userActions"
import {useHistory} from "react-router-dom";


function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const isAuth = useSelector ((state) => state.authReducer.isAuth );


  return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          BCM
          <BsBricks/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
{!isAuth ? (     
        <>
        
        <Link to="register">
        <Button className="btn" style={{
          color :"white" , 
          borderStyle: "solid",
    
        }}>
          Register</Button>
        </Link>

        <Link to="signup">
          <Button className="btn" style={{
          color :"white"         
        }}>Sign In</Button>
        </Link>

          </>
          ):(
                      <Link to="logout">
                      <Button onClick={() => dispatch(logout(history))} className="btn" style={{
          color :"white"         
        }}>Log Out</Button>
                      </Link>
          )}

      </nav>
    
  );
}

export default Navbar;
