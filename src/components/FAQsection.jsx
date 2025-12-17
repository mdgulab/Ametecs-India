import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "What is Ametecs?",
    a: "Ametecs is a technology-driven digital solutions company providing software development, AI platforms, and enterprise applications for global businesses.",
  },
  {
    q: "What services does Ametecs offer?",
    a: "We offer Web Development, Mobile App Development, Artificial Intelligence solutions, Digital Marketing, Cloud Solutions, Product Engineering, UI/UX Design, and Staff Recruiting.",
  },
  {
    q: "Which industries does Ametecs serve?",
    a: "We serve Banking & NBFCs, FinTech, Healthcare, Real Estate, E-commerce, Education, Logistics, BPOs, Startups, and Enterprises.",
  },
  {
    q: "Where is Ametecs located?",
    a: "Ametecs is headquartered in India and works with clients across the US, Middle East, Europe, and Asia.",
  },
  {
    q: "How can I contact Ametecs?",
    a: "You can contact us through our website contact form or request a callback from our team.",
  },
  {
    q: "Why choose Ametecs?",
    a: "We focus on scalable architecture, security-first development, and long-term partnerships to deliver reliable digital solutions.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 bg-[#F4FAFC]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
            Frequently Asked 
          
           <span className="text-3xl md:text-4xl font-bold text-[#006699]">
            Questions
          </span> </h2>
         
          <p className="mt-3 text-sm text-[#5B7280]">
            Answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="
                  bg-white
                  border border-[#D9EAF0]
                  rounded-lg
                "
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    w-full flex justify-between items-center
                    px-6 py-5 text-left
                  "
                >
                  <span
                    className={`font-medium ${
                      isOpen ? "text-[#006699]" : "text-[#0A2540]"
                    }`}
                  >
                    {item.q}
                  </span>

                  <FiChevronDown
                    className={`
                      text-[#006699]
                      transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-[#425466]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
