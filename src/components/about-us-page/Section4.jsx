import styles from "./Sector4.module.css"
import { Link } from 'react-router-dom';

const Section4 = () => {
    return (
        <div className={styles.mainContainer}>
            <img src={require("../assets/images/constructionDarkBuilding2.jpeg")} alt="constructionimage" className={styles.image} />

            <div className={styles.informationContainer}>
                <h2 className={styles.mainText}>Contact Our <br/> Team Today</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <p className={styles.mainParagraph}> Main Office : </p>
                    <p className={styles.mainParagraph2}>
                        E-172 1st Floor, Sector
                        63, Noida, Uttar Pradesh
                        201301 </p>
                </div>
             

                <div style={{ display: "flex", flexDirection: "row", gap: "5px",alignItems:"center" }}>
                    <p className={styles.mainParagraph}> Tel :  </p>
                    <p className={styles.mainParagraph2} style={{paddingTop:"2px"}}> 01204622555</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", gap: "5px",alignItems:"center" }}>
                    <p className={styles.mainParagraph}>    Email:   </p>
                    <p className={styles.mainParagraph2} style={{paddingTop:"2px"}}> info@iridiuminfotech.com</p>
                </div>


                <div style={{ display: "flex", flexDirection: "row", gap: "5px",alignItems:"center" }}>
                    <p className={styles.mainParagraph}>    Social:   </p>
                    <p className={styles.mainParagraph2} style={{paddingTop:"2px"}}> https://www.instagram.com/iridiuminfotech/</p>
                </div>
               

                <button className={styles.button}>
                <Link to="/contact-us" style={{color:"white",textDecoration:"none"}}> Get In Touch</Link>
                </button>
            </div>


        </div>);
}



export default Section4;