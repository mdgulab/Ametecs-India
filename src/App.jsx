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
              <ProductShowcaseSlider/>
              {/* <PartnersAndStats /> */}
              <WhatWeDo />
              <IndustriesSection />
              <TeamSection />
              
              <WhyAmetecsTimeline/>
              <PartnershipSection/>
              
              <Testimonials />
              
              <TechnologiesSection />
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
            {/* CTA BAND */}
      {/* <section className="bg-[#006699] text-white py-14">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Need assistance?</h3>
            <p className="opacity-90 text-sm">
              Our support and sales teams are ready to help within 1 business day.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="bg-white text-[#006699] px-6 py-3 rounded-lg font-semibold shadow"
            >
              Request Demo
            </a>
            <a
              href="mailto:support@ametecs.com"
              className="border border-white/40 px-6 py-3 rounded-lg font-semibold"
            >
              Email Us
            </a>
           
          </div>
          
        </div>
        
      </section> */}
      <Footer />
    </div>
  );
}
