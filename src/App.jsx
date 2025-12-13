import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import IndustriesSection from "./components/IndustriesSection";
import  WhyAmetecsTimeline from "./components/WhyAmetecs";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import TechnologiesSection from "./components/TechnologiesSection";
import WhatsappButton from "./components/WhatsappButton";
// import ThemeToggle from "./components/ThemeToggle";
import BackgroundEffects from "./components/BackgroundEffects";

import TeamSection from "./components/TeamSection";
import PartnershipSection from "./components/partnership";

import ProductShowcaseSlider from "./components/ProductSlider";
import TrustedSection from "./components/TrustedSection";
import StartProjectCTA from "./components/cta";
import ServicesSection from "./components/AllSercvices";


// import WhyAmetecs from "./components/WhyAmetecs";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-1000">
      <Header />

      <Routes>
       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TrustedSection/>
              <ServicesSection/>
             {/* <WhyAmetecsTimeline/>
              <ProductShowcaseSlider/> */}
              {/* <PartnersAndStats /> */}
              {/* <WhatWeDo />
              <IndustriesSection /> */}
              
              
             
              {/* <PartnershipSection/>
              <TechnologiesSection /> */}
              <Testimonials />
              <TeamSection />
               <StartProjectCTA/>  
              
            </>
          }
        />
        <Route path="/PartnerContact" element={<PartnershipSection/>}/>
<Route path="/Products" element={<ProductShowcaseSlider/>}/>
        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />}/> 
        <Route path="/contact" element={<Contact/>}/>
{/* <Route path="/partner" element={<PartnershipSection/>}/> */}
<Route path="/team" element={<TeamSection/>}/>

        {/* CONTACT PAGE (if you enable it later) */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* GLOBAL COMPONENTS */}
      <BackgroundEffects />
      {/* <ThemeToggle /> */}
      <WhatsappButton />
         
      <Footer />
    </div>
  );
}
