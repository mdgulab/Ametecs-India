
// =======================
// Ametecs Mega Header
// =======================

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX
} from "react-icons/fi";

// =======================
// MENU DATA
// =======================

const whoWeAre = [
  {
    id: "about",
    label: "About Us",
    title: "About Ametecs India Pvt Ltd",
    description:
      "Ametecs builds CRM, Dialers, Telephony and AI-driven communication technology powering NBFCs, call centers and enterprises.",
    image: "/images/about.jpg",
    link: "/about",
    buttonText: "About Us"
  },
  {
    id: "partners",
    label: "Partnership",
    title: "Strategic Partnerships",
    description:
      "Partner with Ametecs for telecom, cloud, CRM, dialer and AI integrations across industries.",
    image: "/images/partners.jpg",
    link: "#partneship",
    buttonText: "Explore Partnership"
  },
  {
    id: "blogs",
    label: "Blogs",
    title: "Insights & Updates",
    description:
      "Deep insights from 17+ years in telephony, CRM development and customer communication.",
    image: "/images/blogs.jpg",
    link: "/blogs",
    buttonText: "Read Blogs"
  },
  {
    id: "team",
    label: "Our Team",
    title: "Leadership & Management",
    description:
      "From telecom to enterprise SaaS, our leaders drive automation and operational excellence.",
    image: "/images/team.jpg",
    link: "#teamsection",
    buttonText: "Meet Leadership"
  }
];

const whatWeDo = [
  {
    id: "services",
    label: "Services",
    items: [
      { title: "AI Contact Center Setup", subtitle: "SmartDCM + Smart31 + telephony" },
      { title: "CRM Development", subtitle: "Multi-tenant workflow CRMs" },
      { title: "Cloud Telephony", subtitle: "IVR, WebRTC, SmartPing" },
      { title: "Automation", subtitle: "RPA, queue systems, bots" },
      { title: "DLT Compliance", subtitle: "TRAI, DoT, RBI-ready workflows" },
      { title: "Reports & Analytics", subtitle: "Dashboards, BI, RMI" }
    ],
    link: "/services"
  },
  {
    id: "Products",
    label: "Products",
    items: [
      { title: "SmartDCM", subtitle: "Collection CRM + Dialer" },
      { title: "LeadGER", subtitle: "Telecalling CRM" },
      { title: "Telozar", subtitle: "Remote BPO staff control" },
      { title: "SmartPayroll", subtitle: "HR & payroll automation" },
      { title: "CoreOps CRM", subtitle: "Enterprise workflow CRM" },
      { title: "SmartRMI", subtitle: "AI speech analytics" }
    ],
    link: "/Products"
  },
  {
    id: "platforms",
    label: "Platforms",
    items: [
      { title: "Smart31", subtitle: "Rotating spam-safe numbers" },
      { title: "SmartPing", subtitle: "IVR + OBD + click-to-call" },
      { title: "FlexiDialer", subtitle: "Predictive dialer" },
      { title: "WebRTC Connect", subtitle: "Browser calling" },
      { title: "WABA", subtitle: "WhatsApp messaging" },
      { title: "API Reporting", subtitle: "REST APIs" }
    ],
    link: "/platforms"
  }
];

// =======================
// HEADER COMPONENT
// =======================

function Header() {
  const [openMega, setOpenMega] = useState(null);
  const [whoIndex, setWhoIndex] = useState(0);
  const [whatIndex, setWhatIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMega = () => setOpenMega(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl shadow-lg border-b border-gray-200">

      {/* TOP NAV BAR */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => {
    closeMega();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  }}
>
  <img
    src="/logo.png"
    className="h-14 transition hover:scale-110"
    alt="Ametecs"
  />
</div>


        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10 font-semibold">

          {/* WHO WE ARE */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenMega("who")}
          >
            <span className="flex items-center gap-1">
              Who We Are
              <FiChevronDown className={`${openMega === "who" ? "rotate-180" : ""}`} />
            </span>
            <div className="absolute left-0 top-full h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all"></div>
          </div>

          {/* WHAT WE DO */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenMega("what")}
          >
            <span className="flex items-center gap-1">
              What We Do
              <FiChevronDown className={`${openMega === "what" ? "rotate-180" : ""}`} />
            </span>
            <div className="absolute left-0 top-full h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all"></div>
          </div>

          <Link className="hover:text-blue-700 relative" to="/career">
            Career
          </Link>

          <Link className="hover:text-blue-700 relative" to="/contact">
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg"
        >
          Get in touch
        </Link>

        {/* MOBILE MENU ICON */}
        <button className="lg:hidden text-3xl" onClick={() => setMobileOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* ========================================= */}
      {/*       WHO WE ARE MEGA MENU (DESKTOP)      */}
      {/* ========================================= */}

      <AnimatePresence>
        {openMega === "who" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseLeave={closeMega}
            className="absolute w-full bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,80,200,0.15)] border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">

              {/* LEFT TABS */}
              <div className="w-64 border-r pr-4">
                <h4 className="text-gray-500 text-sm mb-3">Who We Are</h4>
                {whoWeAre.map((item, idx) => (
              <button
  key={item.id}
  onMouseEnter={() => setWhoIndex(idx)}
 /////////
onClick={() => {
  closeMega();

  if (item.id === "team" || item.id === "partners") {
    const targetId = item.id === "team" ? "teamsection" : "partnership";

    if (window.location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.location.href = `/#${targetId}`;
    }
  } else {
    window.location.href = item.link;
  }
}}


/////////////////////

  className={`block w-full text-left px-4 py-3 rounded-lg transition 
    ${idx === whoIndex ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100"}`}
>
  {item.label}
</button>

                ))}
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 flex gap-6">

                {/* IMAGE */}
                <img
                  src={whoWeAre[whoIndex].image}
                  className="w-[40%] h-64 object-cover rounded-xl shadow-lg transition hover:scale-105"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{whoWeAre[whoIndex].title}</h3>
                  <p className="text-gray-700 mb-4">{whoWeAre[whoIndex].description}</p>

                  <button
  onClick={() => {
    closeMega();
    const el = document.getElementById("teamsection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow"
>

                  {whoWeAre[whoIndex].buttonText}
<FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/*          WHAT WE DO MEGA MENU             */}
      {/* ========================================= */}

      <AnimatePresence>
        {openMega === "what" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseLeave={closeMega}
            className="absolute w-full bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,80,200,0.15)] border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">

              {/* LEFT TABS */}
              <div className="w-64 border-r pr-4">
                <h4 className="text-gray-500 text-sm mb-3">What We Do</h4>
                {whatWeDo.map((item, idx) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhatIndex(idx)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition 
                      ${idx === whatIndex ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100"}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* RIGHT GRID */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
                {whatWeDo[whatIndex].items.map((item, i) => (
                  <Link
                    key={i}
                    to={whatWeDo[whatIndex].link}
                    className="flex gap-3 p-3 rounded-lg hover:bg-blue-50 transition"
                  >
                    <div
                      className="w-10 h-10 rounded-full border text-blue-700 border-blue-300 flex items-center justify-center font-bold"
                    >
                      {i + 1}
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.subtitle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/*            MOBILE SLIDE MENU              */}
      {/* ========================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl z-50"
          >
            <div className="flex justify-between items-center px-5 py-4 border-b">
              <span className="font-bold">Menu</span>
              <FiX className="text-3xl cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>

            <div className="p-5 space-y-4">
              {/* WHO WE ARE */}
              <div>
                <div className="text-gray-500 text-xs mb-2">Who We Are</div>
                {whoWeAre.map(item => (
                  <Link key={item.id} to={item.link} className="block py-2">
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* WHAT WE DO */}
              <div>
                <div className="text-gray-500 text-xs mb-2">What We Do</div>
                {whatWeDo.map(item => (
                  <Link key={item.id} to={item.link} className="block py-2">
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link to="/career" className="block pt-4 border-t py-2">
                Career
              </Link>

              <Link to="/contact" className="block py-2">
                Contact
              </Link>

              <Link
                to="/contact"
                className="block mt-4 bg-blue-600 text-white text-center py-3 rounded-full"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// =====================================
// REQUIRED DEFAULT EXPORT
// =====================================

export default Header;
