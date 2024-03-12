import Section from "../components/home-page/Section";
import Section2 from "../components/home-page/Section2";
import Section3 from "../components/home-page/Section3";
import Sector4 from "../components/home-page/Section4";
import Sector5 from "../components/home-page/Section5";
import SimpleSlider from "../components/home-page/Slider/SimplerSilder";



function HomePage() {
  return (
    <div>
        <Section/>
        <Section2/>
        <SimpleSlider/>
        <Section3/>
        <Sector4/>
        <Sector5/>
    </div>
  )
}

export default HomePage;