import styles from "./Section.module.css"


const Section = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainHeading}>Projects</h1>
            <p className={styles.mainParagraph}>Revolutionize your world with visionary projects</p>

            <video autoPlay loop muted className={styles.video}>
                <source src={require("../assets/videos/constructionVideo2.mp4")} type="video/mp4" />
            </video>
        </div>
    );
}


export default Section;