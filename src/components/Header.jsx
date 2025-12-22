// =======================
// Ametecs Mega Header (FINAL)
// =======================
import {
  FiSmartphone,
  FiGlobe,
  FiPenTool,
  FiTrendingUp,
  FiCloud,
  FiCpu,
  FiBox,
  FiUsers,
  FiPhoneCall,
  FiLayers,
  FiSettings,
  FiBriefcase,
  FiDatabase,
} from "react-icons/fi";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useEffect } from "react";

/* =======================
   WHO WE ARE
======================= */

const whoWeAre = [
  
  {
    id: "about",
    label: "About Us",
    title: "About Ametecs India Pvt Ltd",
    description:
      "We build enterprise software, AI products and digital solutions for businesses, banks and agencies.",
    image: "/images/about.jpg",
    link: "/about",
    buttonText: "About Us",
  },
  {
    id: "partners",
    label: "Partnership",
    title: "Strategic Partnerships",
    description:
      "Partner with Ametecs for software, AI products and technology integrations.",
    image: "/images/partners.jpg",
    link: "#partnership",
    buttonText: "Explore Partnership",
  },
  {
    id: "blogs",
    label: "Blogs",
    title: "Insights & Updates",
    description:
      "Product, AI and software insights from real-world enterprise experience.",
    image: "/images/blogs.jpg",
    link: "/blogs",
    buttonText: "Read Blogs",
  },
  {
    id: "team",
    label: "Our Team",
    title: "Leadership & Management",
    description:
      "Experienced leaders driving scalable software and AI platforms.",
    image: "/images/team.jpg",
    link: "#teamsection",
    buttonText: "Meet Leadership",
  },
];

/* =======================
   WHAT WE DO
======================= */

const whatWeDo = [
  {
    id: "services",
    label: "Services",
    items: [
      {
  title: "App Development",
  subtitle: "Android, iOS & cross-platform apps",
  link: "/services/app-development",
  icon: <FiSmartphone />,   // 📱 Mobile
},

{
  title: "Web Development",
  subtitle: "Business & enterprise websites",
  link: "/services/web-development",
  icon: <FiGlobe />,        // 🌐 Web
},

{
  title: "UI / UX Design",
  subtitle: "User-centric product design",
  link: "/services/ui-ux-design",
  icon: <FiPenTool />,      // ✏️ Design
},

{
  title: "Digital Marketing",
  subtitle: "SEO, PPC & growth marketing",
  link: "/services/digital-marketing",
  icon: <FiTrendingUp />,   // 📈 Growth
},

{
  title: "Cloud Solutions",
  subtitle: "Cloud setup, migration & DevOps",
  link: "/services/cloud-solutions",
  icon: <FiCloud />,        // ☁️ Cloud
},

{
  title: "AI Solutions",
  subtitle: "Custom AI & automation systems",
  link: "/services/ai-solutions",
  icon: <FiCpu />,          // 🧠 AI / Compute
},

{
  title: "Product Engineering",
  subtitle: "Scalable SaaS product development",
  link: "/services/product-engineering",
  icon: <FiBox />,          // 📦 Product
},

{
  title: "Staff Recruiting",
  subtitle: "Tech & non-tech hiring",
  link: "/services/staff-recruiting",
  icon: <FiUsers />,        // 👥 People
},

    ],
  },
  {
    id: "products",
    label: "Products",
    items: [
      {
  title: "SmartDCM",
  subtitle: "AI collection CRM & dialer",
  link: "/smartdcm",
  icon: <FiPhoneCall />,    // ☎️ Dialer
},

{
  title: "LeadGER",
  subtitle: "Telecalling & lead management CRM",
  link: "https://ametecsindia.com/leadger.html",
  icon: <FiLayers />,       // 🧩 CRM / Leads
},

{
  title: "Telozar",
  subtitle: "Remote staff & BPO control",
  link: "https://ametecsindia.com/telozar.html",
  icon: <FiSettings />,     // ⚙️ Control
},

{
  title: "SmartPayroll",
  subtitle: "HR & payroll automation",
  link: "https://ametecsindia.com/smartpayroll.html",
  icon: <FiBriefcase />,    // 💼 HR
},

{
  title: "CoreOps CRM",
  subtitle: "Enterprise workflow CRM",
  link: "https://ametecsindia.com/coreops-crm.html",
  icon: <FiDatabase />,     // 🗄️ Data / Ops
},

    ],
  },
];

/* =======================
   SCROLL HELPER
======================= */

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* =======================
   HEADER
======================= */

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMega, setOpenMega] = useState(null);
  const [whoIndex, setWhoIndex] = useState(0);
  const [whatIndex, setWhatIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMega = () => setOpenMega(null);

  const handleLogoClick = () => {
    closeMega();
    location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate("/");
  };

  const handleWhoItemClick = (item) => {
    closeMega();

    if (item.id === "team") {
      location.pathname === "/"
        ? scrollToId("teamsection")
        : navigate("/#teamsection");
      return;
    }

    if (item.id === "partners") {
      location.pathname === "/"
        ? scrollToId("partnership")
        : navigate("/#partnership");
      return;
    }

    navigate(item.link);
  };
  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileOpen]);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow">
      {/* TOP BAR */}
      <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Ametecs" className="h-12 lg:h-14" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <div onMouseEnter={() => setOpenMega("who")} className="cursor-pointer">
            <span className="flex items-center gap-1">
              Who We Are <FiChevronDown />
            </span>
          </div>

          <div onMouseEnter={() => setOpenMega("what")} className="cursor-pointer">
            <span className="flex items-center gap-1">
              What We Do <FiChevronDown />
            </span>
          </div>

          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
        >
          Get in touch
        </Link>

        {/* MOBILE */}
        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* WHO WE ARE MEGA */}
      <AnimatePresence>
        {openMega === "who" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white shadow-lg border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              <div className="w-64 border-r">
                {whoWeAre.map((item, i) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhoIndex(i)}
                    onClick={() => handleWhoItemClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      i === whoIndex
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 flex gap-6">
                <img
                  src={whoWeAre[whoIndex].image}
                  className="w-[40%] h-64 object-cover rounded-xl"
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {whoWeAre[whoIndex].title}
                  </h3>
                  <p className="text-sm mb-4">
                    {whoWeAre[whoIndex].description}
                  </p>
                  <button
                    onClick={() => handleWhoItemClick(whoWeAre[whoIndex])}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm"
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

      {/* WHAT WE DO MEGA */}
      <AnimatePresence>
        {openMega === "what" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={closeMega}
            className="hidden lg:block absolute w-full bg-white shadow-lg border-t"
          >
            <div className="container mx-auto px-6 py-8 flex gap-8">
              <div className="w-64 border-r">
                {whatWeDo.map((item, i) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setWhatIndex(i)}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      i === whatIndex
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
                {whatWeDo[whatIndex].items.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    onClick={closeMega}
                    className="flex gap-3 p-3 rounded-lg hover:bg-blue-50"
                  >
                    <div className="w-10 h-10 border rounded-full flex items-center justify-center text-blue-700">
  {item.icon}
</div>

                    <div>
                      <div className="font-semibold text-sm">
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
     

 {mobileOpen && (
  <div className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col min-h-[100dvh]">
    
    {/* TOP */}
    <div className="flex justify-between items-center px-6 py-4 border-b">
      <img src="/logo.png" className="h-10" alt="Ametecs" />
      <button onClick={() => setMobileOpen(false)}>
        <FiX className="text-2xl" />
      </button>
    </div>

    {/* SCROLLABLE CONTENT */}
    <div className="flex-1 p-6 pb-24 space-y-6 overflow-y-auto overscroll-contain">

      {/* WHO WE ARE */}
      {whoWeAre.map(item => (
        <button
          key={item.id}
          onClick={() => {
            handleWhoItemClick(item);
            setMobileOpen(false);
          }}
          className="block w-full text-left py-3 font-medium"
        >
          {item.label}
        </button>
      ))}

      {/* SERVICES */}
      <div className="pt-4 border-t">
        {whatWeDo[0].items.map(item => (
          <Link
            key={item.title}
            to={item.link}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 py-3"
          >
            <span className="text-blue-600">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="pt-4 border-t">
        {whatWeDo[1].items.map(item => (
          <a
            key={item.title}
            href={item.link}
            className="flex items-center gap-3 py-3"
          >
            <span className="text-blue-600">{item.icon}</span>
            <span>{item.title}</span>
          </a>
        ))}
      </div>

      {/* EXTRA LINKS (Career / Contact) */}
      <div className="pt-5 border-t space-y-4">
        <Link to="/career" onClick={() => setMobileOpen(false)}><b>Career</b></Link><br />
        <br />
        <Link to="/contact" onClick={() => setMobileOpen(false)}><b>Contact</b></Link>
      </div>

    </div>
  </div>
)}


    </header>
  );
}
