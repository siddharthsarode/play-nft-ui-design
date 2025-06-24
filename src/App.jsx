import React from "react";
import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/Home/HeroSection";
import PartnersStrip from "./components/Home/PartnersStrip";
import PopularThisWeek from "./components/Home/PopularThisWeek";
import TopSellers from "./components/Home/TopSellers";
import Works from "./components/Home/Works";
import JoinUs from "./components/Home/JoinUs";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div className="bg-deep-navy min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <PartnersStrip />
      <PopularThisWeek />
      <TopSellers />
      <Works />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
