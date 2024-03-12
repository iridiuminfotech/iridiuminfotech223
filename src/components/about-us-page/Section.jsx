import styles from "./Section.module.css";
import constructionImage from '../assets/images/constructionDarkBuilding.jpeg';
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={constructionImage} alt="constructionimage" className={styles.image} />

      <div className={styles.informationContainer}>
      <img src={require("../assets/images/companyLogoTransparent.png")} alt="con" className={styles.companyLogo}/>
        <h2 className={styles.mainText}>Iridium Infotech Pvt.Ltd.</h2>
        <p className={styles.mainParagraph}>Building Excellence Beyond Boundaries: Where Mechanical Precision Meets Civil
          Mastery. We are your dedicated partner in construction, seamlessly blending expertise
          in Mechanical and Civil Works. From government projects to private ventures, our
          commitment to excellence ensures every creation surpasses expectations, delivering not
          just functionality but financial soundness. Elevate your projects with our specialized
          knowledge and client-centric approach, consistently providing top-notch solutions in
          the dynamic realm of construction.</p>
          <button className={styles.button}>
          <Link to="/contact-us" style={{color:"white",textDecoration:"none"}}> Contact Us</Link>
          
          </button>
      </div>

     
    </div>
  )
}

export default Section;
