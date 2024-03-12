import styles from "./Section3.module.css";

const Section3 = () => {
    return (
        <div className={styles.mainContainer}>

            <h3 style={{ marginLeft: "20px", fontSize: "24px" }}>Partner of Your Dream</h3>
            <h1 style={{ marginLeft: "15px", fontSize: "50px",textAlign:"center",color:"white" }}>Quality Services</h1>

            <div className={styles.imageContainer}>
                <div style={{ width: "400px", height: "fit-Content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                    <img src={require("../assets/images/landMining.png")}  alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center" }}>Land Mining</p>
                </div>


                <div style={{ width: "400px",  height: "max-content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                <img src={require("../assets/images/BuildingStaff.png")} alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center" }}>Building Staffs</p>
                </div>


                <div style={{ width: "400px",  height: "max-content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                <img src={require("../assets/images/MaterialSupply.png")} alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center" }}>Material Supply</p>
                </div>

                <div style={{ width: "400px",  height: "max-content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                <img src={require("../assets/images/Consultany.png")} alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center"}}>Consultancy</p>
                </div>


                <div style={{ width: "400px",  height: "max-content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                <img src={require("../assets/images/Architecture.png")} alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center" }}>Architecture</p>
                </div>

                <div style={{ width: "400px",  height: "max-content", display: "flex", flexDirection: "column", gap: "10px",borderRadius:"7px" }}>
                <img src={require("../assets/images/CraneService.png")} alt="wewe"/>
                    <p style={{ fontSize: "20px", fontWeight: "normal" ,textAlign:"center" }}>Crane Service</p>
                </div>



            </div>

        </div>
    );
}



export default Section3;
