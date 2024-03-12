import styles from "./Section.module.css"


const Section = () =>{
    return (
    <div>
         <h1 className={styles.mainHeading}>Our Services</h1>
         <p className={styles.mainParagraph}>At Iridium Infotech, we specialize in a wide range of services, ensuring a one-stop solution for all your construction needs</p>
    </div>
   );
}


export default Section;