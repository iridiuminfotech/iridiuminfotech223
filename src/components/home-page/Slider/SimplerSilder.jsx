import Slider from "react-slick";
import styles from "./Sim.module.css"

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed:  2000,
    waitForAnimate: true,
    fade: true,

  };
  return (
    <div className="slider-container" style={{ backgroundColor: "#0e1012", paddingTop: "70px" }}>
      <Slider {...settings}>


        <div >

          <div className={styles.contentContainer}>
            <img src={require("../../assets/images/con1.jpeg")} alt="2" className={styles.image} />
          </div>

        </div>


        <div>

          <div className={styles.contentContainer}>
            <img src={require("../../assets/images/con2.jpeg")} alt="2" className={styles.image} />
          </div>

        </div>



        <div>

          <div className={styles.contentContainer}>
            <img src={require("../../assets/images/con3.jpeg")} alt="2" className={styles.image} />
          </div>
          
        </div>

        


      </Slider>
    </div>
  );
}
