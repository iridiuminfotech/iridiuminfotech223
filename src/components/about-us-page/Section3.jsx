import AccordionUsage from "./AccordionUsage";
import styles from "./Section3.module.css"


const Section3 = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Why Choose Iridium InfoTech ?</h1>

      
      <div className={styles.questionCard}>
            <AccordionUsage />
      </div>
       

        
    </div>
  )
}

export default Section3;