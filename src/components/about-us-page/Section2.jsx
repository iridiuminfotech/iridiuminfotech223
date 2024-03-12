import Card from "./Card/Card";
import styles from "./Section2.module.css";


const Section2 = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Our Attorneys</h1>

        <div className={styles.mainCard}>
        <Card image={require('../assets/images/person1.png')}  nameText={"Chun Hei Kim"} positionText={"Managing Partner"} />
        <Card image={require('../assets/images/person2.png')}  nameText={"Pedro Fernandes"} positionText={"Senior"}/>
        <Card image={require('../assets/images/person3.png')}  nameText={"Pedro Fernandes"} positionText={"Senior"}/>
        </div>
       

        
    </div>
  )
}

export default Section2;

