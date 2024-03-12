// Footer.js

import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h3>Build With Iridium</h3>
                <h2 style={{ color: "rgb(23, 139, 23)" }}>VISION GOT LARGER</h2>
                <h3>Mon - Sat : 9:00 - 18:00 </h3>
                <h3>Sunday - CLOSED</h3>
            </div>

            <div className={styles.contentContainer2}>
                <h3 style={{ color: "rgb(23, 139, 23)" }}>Our Services</h3>
                <ul className={styles.horizontalList}>
                    <li>Pump Motor Installation & Repairing</li>
                    <li>Steel Foundation & Structure Arrangement</li>
                    <li>Electro-Mechanical & Fabrication Work</li>


                    <li>Building Repair & Remodels</li>
                    <li>Road Maintenance</li>
                    <li>New Construction Planning & Development</li>

                    <li>STP, WTP & ETP Installation</li>
                    <li>All Types Civil, Electrical & Mechanical Works</li>
                </ul>
            </div>


            <div className={styles.contentContainer2}>
                <h3 style={{ color: "rgb(23, 139, 23)" }}>Office in Noida</h3>
                <ul className={styles.horizontalList}>
                    <li>E-172 1st Floor, Sector 63, Noida, <br/>Uttar Pradesh 201301</li>
                    <li>+91 9873951565</li>
                </ul>
            </div>

            <div className={styles.contentContainer2}>
                <h3 style={{ color: "rgb(23, 139, 23)" }}>Our Locations</h3>
                <ul className={styles.horizontalList}>
                    <li>New Delhi</li>
                    <li>Noida</li>
                    <li>Bihar</li>
                </ul>
            </div>

           
            





        </div>
    );
}










export default Footer;
