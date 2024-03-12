import styles from "./Section.module.css";
import { useNavigate } from "react-router-dom";

function Section() {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate("/service");
  };

  const handleNavigate2 = () => {
    navigate("/contact-us");
  };


  return (
    <div className={styles.mainContainer}>
      <video autoPlay loop muted className={styles.image}>
        <source src={require("../assets/videos/constructionVideo3.mp4")} type="video/mp4" />
      </video>

      <div className={styles.textContainer}>
        <h3 className={styles.textFirst}>Partner Of Your Dream</h3>
        <h1 className={styles.textSecond}>Vision Got Larger</h1>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={handleNavigate}>Our Services</button>
        <button className={styles.button} style={{ backgroundColor: "transparent", border: "2px solid black" }} onClick={handleNavigate2}>Contact Us</button>
      </div>
    </div>
  );
}

export default Section;
