import { useParams } from "react-router-dom";
import PageHero from "./pageHero";
import ServiceContactForm from "./ServiceContactForm";
import { servicesData } from "./servicesData";
import WhyAmetecs from "../WhyAmetecs";
import TechnologiesSection from "./Technologies";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) return null;

  return (
    
    <>
    
      
   
  {/* HERO */}
  <PageHero
    title={service.title}
    subtitle={service.overview}
    points={[
      "Proven enterprise workflow",
      "Scalable & secure execution",
      "Dedicated expert teams",
      "Post-launch support",
    ]}
  />

  {/* BACK LINK */}
  <div className="bg-[#F4FAFC]">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <a
        href="/services"
        className="text-[#006699] font-medium hover:underline"
      >
        ← Back to Services
      </a>
    </div>
 <div className="bg-[#F4FAFC] max-w-6xl  mx-auto grid md:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                ✓ {f}
              </div>
            ))}
          </div>
  </div>


    {/* <div className="bg-[#F4FAFC] max-w-6xl  px-6"> */}

          {/* FEATURES */}
         
          {/* </div> */}
          
  {/* ================= TECHNOLOGIES ================= */}
  <section className="bg-[#F4FAFC] py-24 border-t">
    <div className="max-w-7xl mx-auto px-6">
      <TechnologiesSection serviceId={service.id} />



    </div>

  </section>

  {/* ================= PROCESS ================= */}

  {service.id !== "staff-recruiting" && (
    <section className="bg-[#F4FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <WhyAmetecs/>
      </div>
    </section>
  )}


  {/* ================= CONTACT ================= */}
  <section className="bg-[#006699] py-22 mx-26">
    <div className="max-w-7xl mx-auto px-6">
      <ServiceContactForm service={service.title} />
    </div>
  </section>
</>

  
  );
}
