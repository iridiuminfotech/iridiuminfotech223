import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Form.module.css";

const Form = () => {
    return (
        <div className={styles.outerContainer}>

            {/* <div className={styles.backgroundImage}> */}
            
                {/* <img src={require("../assets/images/construction3.jpeg")} alt="construction_images" className={styles.backgroundImage} />
            </div> */}

            <div className={styles.innerContainer}>
                <h1 className={styles.mainText}>Contact Us</h1>

                <div className={styles.informationContainer}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                        <HiBuildingOffice fontSize={25} />
                        <h2> Corporate Address</h2>
                    </div>
                    <p className={styles.infoText} >E-172 1st Floor, Sector 63, Noida, Uttar Pradesh 201301</p>
                </div>

                <div className={styles.informationContainer}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                        <FaPhoneAlt fontSize={18} />
                        <h2>Phone</h2>
                    </div>
                    <p className={styles.infoText}>01204622555</p>
                </div>

                <div className={styles.informationContainer}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                        <MdEmail fontSize={18} />
                        <h2>Email</h2>
                    </div>
                    <p className={styles.infoText}>info@iridiuminfotech.com</p>
                </div>
            </div>
        </div>
    )
}

export default Form;
