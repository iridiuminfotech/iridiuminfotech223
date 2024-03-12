import styles from "./Card.module.css";

const Card = ({image,nameText,positionText})=>{
    return(
        <div className={styles.mainContainer} >
            <img src={image} alt="imaging" />
            <h2 style={{color:"white"}}>{nameText}</h2>
            <p className={styles.paragraph}>{positionText}</p>
            <hr className={styles.line}/>
        </div>
    );
}



export default Card;