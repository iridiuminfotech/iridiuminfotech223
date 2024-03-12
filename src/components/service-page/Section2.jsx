import styles from "./Section2.module.css"
import { dataOfServices } from "./data/data";


const Section2 = () =>{
    return (
    
    <div className={styles.mainContaier}>

        <div className={styles.cardContainer}>

            {dataOfServices.map((object,index)=>{
            return(
            <div className={index%2===0 ? styles.cardLeft : styles.cardRight }>
                <img src={object.imageUrl} alt="e2e2" className={styles.image} />
                <div className={styles.cardContent}>
                     <h1 className={styles.cardContentHeading}> {object.heading} </h1>
                     <p className={styles.cardContentPara}>{object.paragraph}</p>
                </div>
            </div>
            )

            })}

          

        </div>


    </div>
    
    );
}


export default Section2;



