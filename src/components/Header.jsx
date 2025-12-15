// =======================
// Ametecs Mega Header
// =======================

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
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
    buttonText: "About Us",
  },
  {
    id: "partners",
    label: "Partnership",
    title: "Strategic Partnerships",
    description:
      "Partner with Ametecs for telecom, cloud, CRM, dialer and AI integrations across industries.",
    image: "/images/partners.jpg",
    link: "#partnership",
    buttonText: "Explore Partnership",
  },
  {
    id: "blogs",
    label: "Blogs",
    title: "Insights & Updates",
    description:
      "Deep insights from 17+ years in telephony, CRM development and customer communication.",
    image: "/images/blogs.jpg",
    link: "/blogs",
    buttonText: "Read Blogs",
  },
  {
    id: "team",
    label: "Our Team",
    title: "Leadership & Management",
    description:
      "From telecom to enterprise SaaS, our leaders drive automation and operational excellence.",
    image: "/images/team.jpg",
    link: "#teamsection",
    buttonText: "Meet Leadership",
  },
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
      { title: "Reports & Analytics", subtitle: "Dashboards, BI, RMI" },
    ],
    link: "/services",
  },
  {
    id: "products",
    label: "Products",
    items: [
      { title: "SmartDCM", subtitle: "Collection CRM + Dialer" },
      { title: "LeadGER", subtitle: "Telecalling CRM" },
      { title: "Telozar", subtitle: "Remote BPO staff control" },
      { title: "SmartPayroll", subtitle: "HR & payroll automation" },
      { title: "CoreOps CRM", subtitle: "Enterprise workflow CRM" },
      { title: "SmartRMI", subtitle: "AI speech analytics" },
    ],
    link: "/products",
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
      { title: "API Reporting", subtitle: "REST APIs" },
    ],
    link: "/platforms",
  },
];

// helper: smooth scroll to id (for home page)
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMega, setOpenMega] = useState(null);
  const [whoIndex, setWhoIndex] = useState(0);
  const [whatIndex, setWhatIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMega = () => setOpenMega(null);

const handleLogoClick = () => {
  closeMega();

  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate("/");
  }
};

 const handleWhoItemClick = (item) => {
  closeMega();

  // Scroll sections on home page
  if (item.id === "team") {
    if (location.pathname === "/") {
      scrollToId("teamsection");
    } else {
      navigate("/#teamsection");
    }
    return;
  }

  if (item.id === "partners") {
    if (location.pathname === "/") {
      scrollToId("partnership");
    } else {
      navigate("/#partnership");
    }
    return;
  }

  // Normal route navigation (About, Blogs etc.)
  navigate(item.link);
};



  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 border-b border-gray-200
        bg-white shadow-md
        lg:bg-white/100 lg:backdrop-blur-xl lg:shadow-lg
      "
    >


      {/* TOP NAV BAR */}
      <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src="/logo.png"
            className="h-12 lg:h-14 transition-transform hover:scale-105"
            alt="Ametecs"
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-800">
          {/* WHO WE ARE */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenMega("who")}
          >
            <span className="flex items-center gap-1">
              Who We Are
              <FiChevronDown
                className={`transition-transform ${
                  openMega === "who" ? "rotate-180" : ""
                }`}
              />
            </span>
            <div className="absolute left-0 top-full h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all" />
          </div>

          {/* WHAT WE DO */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenMega("what")}
          >
            <span className="flex items-center gap-1">
              What We Do
              <FiChevronDown
                className={`transition-transform ${
                  openMega === "what" ? "rotate-180" : ""
                }`}
              />
            </span>
            <div className="absolute left-0 top-full h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all" />
          </div>

          <Link className="hover:text-blue-700" to="/career">
            Career
          </Link>

          <Link className="hover:text-blue-700" to="/contact">
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON (desktop) */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-full shadow-lg"
        >
          Get in touch
        </Link>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setMobileOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* ========================================= */}
      {/*       WHO WE ARE MEGA MENU (DESKTOP)      */}
      {/* ========================================= */}

      <AnimatePresence>
        {openMega === "who" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,80,200,0.15)] border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              {/* LEFT TABS */}
              <div className="w-64 border-r pr-4">
                <h4 className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-[0.16em]">
                  Who We Are
                </h4>
                {whoWeAre.map((item, idx) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhoIndex(idx)}
                    onClick={() => handleWhoItemClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition 
                      ${
                        idx === whoIndex
                          ? "bg-blue-50 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
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
                  className="w-[40%] h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                  alt={whoWeAre[whoIndex].title}
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {whoWeAre[whoIndex].title}
                  </h3>
                  <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                    {whoWeAre[whoIndex].description}
                  </p>

                  <button
                    onClick={() => handleWhoItemClick(whoWeAre[whoIndex])}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow text-sm"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,80,200,0.15)] border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              {/* LEFT TABS */}
              <div className="w-64 border-r pr-4">
                <h4 className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-[0.16em]">
                  What We Do
                </h4>
                {whatWeDo.map((item, idx) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhatIndex(idx)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition 
                      ${
                        idx === whatIndex
                          ? "bg-blue-50 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
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
                    <div className="w-10 h-10 rounded-full border text-blue-700 border-blue-300 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.subtitle}
                      </div>
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
          <>
            {/* dark overlay behind drawer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center px-5 py-4 border-b">
                <span className="font-bold text-gray-800 text-sm">
                  Menu
                </span>
                <FiX
                  className="text-2xl cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                />
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-5 text-sm">
                {/* WHO WE ARE */}
                <div>
                  <div className="text-gray-500 text-xs mb-2 uppercase tracking-[0.16em]">
                    Who We Are
                  </div>
                  {whoWeAre.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setMobileOpen(false);
                        handleWhoItemClick(item);
                      }}
                      className="block w-full text-left py-2 text-gray-800"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* WHAT WE DO */}
                <div>
                  <div className="text-gray-500 text-xs mb-2 uppercase tracking-[0.16em]">
                    What We Do
                  </div>
                  {whatWeDo.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-gray-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <Link
                    to="/career"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-gray-800"
                  >
                    Career
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-gray-800"
                  >
                    Contact
                  </Link>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-3 bg-blue-600 text-white text-center py-3 rounded-full font-semibold"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
