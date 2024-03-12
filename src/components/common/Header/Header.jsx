import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={require("../../assets/images/companyLogoTransparent.png")} alt="Logo" width={"200px"} height={"80px"}/>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
