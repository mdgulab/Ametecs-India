// TrustedSection.jsx
import React from "react";

const LOGOS_ROW_1 = [
  "/demo logo/logo1.jpg",
   "/demo logo/logo2.jpg",
   "/demo logo/logo3.jpg",
   "/demo logo/logo4.jpg",
   "/demo logo/logo1.jpg",
   "/demo logo/logo2.jpg",
];

const LOGOS_ROW_2 = [
    "/demo logo/logo4.jpg",
   "/demo logo/logo3.jpg",
   "/demo logo/logo4.jpg",
   "/demo logo/logo1.jpg",
   "/demo logo/logo2.jpg",
];

export default function TrustedSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ⭐ Rating line */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M12 17.3L5.6 20l1-6.2L2 9.6l6.4-.9L12 3l3.6 5.7 6.4.9-4.6 4.2 1 6.2z"
                fill="#006699"
              />
            </svg>
            <span className="font-semibold text-black">4.5/5</span>
            <span>based on 19,000+ reviews on</span>

            <div className="flex gap-2 ml-2">
              <span className="w-7 h-7 border rounded flex items-center justify-center font-semibold text-xs">C</span>
              <span className="w-7 h-7 border rounded flex items-center justify-center font-semibold text-xs">F</span>
              <span className="w-7 h-7 border rounded flex items-center justify-center font-semibold text-xs">G</span>
            </div>
          </div>
        </div>

        {/* 📊 Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center text-center gap-10">
          <div>
            <div className="text-[56px] font-extrabold text-black">700+</div>
            <div className="text-sm text-slate-500 mt-1">Experts</div>
          </div>

          <div className="hidden md:block h-20 w-px bg-gray-300 mx-auto" />

          <div>
            <div className="text-[56px] font-extrabold text-black">4500+</div>
            <div className="text-sm text-slate-500 mt-1">Projects Delivered</div>
          </div>

          <div className="hidden md:block h-20 w-px bg-gray-300 mx-auto" />

          <div>
            <div className="text-[56px] font-extrabold text-black">97%</div>
            <div className="text-sm text-slate-500 mt-1">Client Satisfaction</div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-300" />

        {/* Trusted text */}
        <div className="mt-6 text-center">
          <p className="text-base font-medium text-black">
            Trusted by startups and{" "}
            <span className="text-blue-500 font-semibold">Fortune 500</span>{" "}
            companies
          </p>
        </div>

        {/* 🏢 Logos Row 1 */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {LOGOS_ROW_1.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="company logo"
              className="h-10 object-contain"
            />
          ))}
        </div>

        {/* 🏢 Logos Row 2 */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {LOGOS_ROW_2.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="company logo"
              className="h-10 object-contain"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
