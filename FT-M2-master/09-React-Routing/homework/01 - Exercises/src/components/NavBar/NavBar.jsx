import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink to="/">
            <img src={logoHenry} alt="logo-henry" />
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink to="/shipping">
            <span>Navieras</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/promotions">
            <span>Promociones</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
