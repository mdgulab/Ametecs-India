import { FiArrowRight } from "react-icons/fi";

const PRIMARY = "#006699";

export default function StartProjectCTA() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0b1f2a] leading-tight">
          Start Your{" "}
          <span className="text-[#006699]">New Project</span>{" "}
          With{" "}
          <span className="text-[#0b1f2a]">APPIT</span>
        </h2>

        {/* Sub text */}
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Let’s Try! Get A Call From Support Team!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
          
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-9 py-3 rounded-full border border-[#006699] text-[#006699] font-medium transition-all duration-300 hover:bg-[#006699] hover:text-white"
          >
            Contact Us
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="mailto:support@appit.com"
            className="group inline-flex items-center justify-center gap-2 px-9 py-3 rounded-full border border-[#006699] text-[#006699] font-medium transition-all duration-300 hover:bg-[#006699] hover:text-white"
          >
            Email Us
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#location"
            className="group inline-flex items-center justify-center gap-2 px-9 py-3 rounded-full border border-[#006699] text-[#006699] font-medium transition-all duration-300 hover:bg-[#006699] hover:text-white"
          >
            Location
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>
      </div>
    </section>
  );
}
