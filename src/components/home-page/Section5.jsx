import styles from "./Section5.module.css"
import { Link } from 'react-router-dom';

const Sector5 = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.innerContainer}>
                    <h1 style={{ color: "white" }} className={styles.heading}>Committed To Keep People Healthy & Safe</h1>

                    <button className={styles.button}>
                    <Link to="/contact-us" style={{color:"white",textDecoration:"none"}}> Get In Touch</Link>
                    </button>
                </div>


            </div>


        </div>
    );

}
export default Sector5;