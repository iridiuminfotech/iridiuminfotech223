import React from 'react'
import styles from "./DrawerV.module.css"
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import { MdDehaze } from "react-icons/md";
import { BiBuildings, BiHomeAlt } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdOutlinePersonPin } from "react-icons/md";
import { ImCross } from "react-icons/im";

import 'react-modern-drawer/dist/index.css'

const DrawerV = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className={styles.drawer}>
      <button onClick={toggleDrawer} style={{ marginLeft: "15px" }}><MdDehaze fontSize={30} /> </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
      >
        <div className={styles.interalDrawer} style={{
          height: "100%", display: "flex", flexDirection: "column",
          padding: "10px", paddingTop: "10px", gap: "40px"
        }}>

<div style={{ display: "flex", flexDirection: "row", borderBottom: "0.2px solid white", justifyContent: "space-between" }}>
    <img src={require("../../assets/images/companyLogoTransparent.png")} alt="Logo" width={"90px"} height={"50px"} />
    <button onClick={toggleDrawer}><ImCross fontSize={20} /></button>
</div>


          <ul>
            <li><Link to="/">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                <BiHomeAlt fontSize={23} /> <h3 style={{ fontWeight: "400" }}>Home</h3>
              </div>
            </Link></li>
            <li><Link to="/projects">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                <BiBuildings fontSize={23} /> <h3 style={{ fontWeight: "400" }}>Projects</h3>
              </div>
            </Link></li>
            <li><Link to="/service">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                <GrServices fontSize={20} /> <h3 style={{ fontWeight: "400" }}> Services</h3>
              </div>
            </Link></li>
            <li><Link to="/about-us">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                <MdOutlinePersonPin fontSize={20} /> <h3 style={{ fontWeight: "400" }}> About Us </h3>
              </div>

            </Link></li>


            <li><Link to="/contact-us">

              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginLeft: "10px" }}>
                <RiCustomerService2Line fontSize={20} /> <h3 style={{ fontWeight: "400" }}> Contact Us</h3>
              </div>
            </Link></li>
          </ul>

    
        </div>


      </Drawer>
    </div>
  );
};

export default DrawerV;
