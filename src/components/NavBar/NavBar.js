import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="container my-4">
      <div className="row align-middle">

        <div className="col">
          <NavLink
            to="/"
            exact 
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            HomeSlice
          </NavLink>
        </div>
          
        <div className="col">
          <NavLink
            to="/quality"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Quality
          </NavLink>
        </div>

        <div className="col">
          <NavLink
            to="/quantity"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Quantity
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default NavBar;