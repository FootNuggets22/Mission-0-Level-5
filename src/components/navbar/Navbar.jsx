import React from "react";
import Styles from "./Navbar.module.css";
import notRick from "../../images/missionReadyPhoto.gif";

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbarLeft}>
        <div className={Styles.logo} />
        <span className={Styles.companyName}>My Company</span>
      </div>

      <div className={Styles.navbarRight}>
        <div className={Styles.navbarMenu}>
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
        </div>
        <button className={Styles.loginButton}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
