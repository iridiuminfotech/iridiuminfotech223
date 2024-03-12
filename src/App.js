import Footer from "./components/common/Footer/Footer";
import DrawerV from "./components/common/Header/DrawerV";
import Header from "./components/common/Header/Header";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import React, { useState, useEffect } from 'react';

import {  Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
 





  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      {windowWidth <= 786 ? <DrawerV /> : <Header />}
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
