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
import AboutAmetecs from "./components/Home_about";
import FAQSection from "./components/FAQsection";
import AwardsRecognition from "./components/Award";
import PolicyPage from "./components/PolicyPage";

import JobDetails from "./components/Career/JobDetails";
import Career from "./components/Career/career";
import ResumeApplyModal from "./components/Career/ResumeApplyModal";
import ApplyModal from "./components/Career/ApplyModel";
import AdminJobs from "./components/Admin/AdminJobs";


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
             <AwardsRecognition/>
             <TrustedSection/>
              <ServicesSection/> <AboutAmetecs/>
               <WhyAmetecsTimeline/>
              
             
              
             
              <ProductShowcaseSlider/>
              {/* <PartnersAndStats /> */}
              {/* <WhatWeDo /> */}
              {/* // <IndustriesSection /> */}
              
              
             
              {/* <PartnershipSection/>
              <TechnologiesSection /> */}
              <Testimonials />
              <TeamSection />
               <FAQSection/>
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

<Route path="/privacy-policy" element={<PolicyPage/>} />
<Route path="/terms-of-use" element={<PolicyPage />} />
<Route path="/refund-policy" element={<PolicyPage />} />
<Route path="/disclaimer" element={<PolicyPage />} />
<Route path="/data-protection" element={<PolicyPage />} />


<Route path="/career" element={<Career />} />
<Route path="/career/:id" element={<JobDetails />} />
<Route path="/admin/jobs" element={<AdminJobs />} />




        {/* CONTACT PAGE (if you enable it later) */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* GLOBAL COMPONENTS */}
      {/* <BackgroundEffects /> */}
      {/* <ThemeToggle /> */}
      <WhatsappButton />
         
      <Footer />
    </div>
  );
}
