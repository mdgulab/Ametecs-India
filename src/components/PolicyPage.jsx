import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const POLICY_LIST = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-of-use", label: "Terms of Use" },
  { path: "/refund-policy", label: "Refund Policy" },
  { path: "/disclaimer", label: "Disclaimer" },
  { path: "/data-protection", label: "Data Protection" },
];

const POLICIES = {
  "/privacy-policy": {
    title: "Privacy Policy",
    subtitle:
      "How Ametecs India Private Limited collects, uses, and protects personal and business information.",
    sections: [
      {
        heading: "Information We Collect",
        text:
          "We collect information only when necessary to provide our services efficiently and securely.",
        points: [
          "Personal information such as name, email address, contact details, and company information.",
          "Usage data including IP address, device type, browser details, and browsing behavior.",
        ],
      },
      {
        heading: "How We Use Your Information",
        text:
          "Your information is used strictly for legitimate business and operational purposes.",
        points: [
          "To provide, operate, and maintain our software platforms and services.",
          "To communicate regarding support, updates, and service-related notifications.",
          "To send marketing and product updates where permitted.",
          "To ensure fraud prevention and legal compliance.",
        ],
      },
      {
        heading: "Disclosure of Information",
        text:
          "We do not sell personal data. Information may be disclosed only in limited circumstances.",
        points: [
          "With your explicit consent.",
          "To comply with legal or regulatory obligations.",
          "To protect the rights, safety, and property of Ametecs.",
          "During mergers, acquisitions, or corporate restructuring.",
        ],
      },
      {
        heading: "Security",
        text:
          "We implement reasonable technical and organizational security measures. However, no online system is completely secure.",
      },
      {
        heading: "Your Choices",
        points: [
          "Access and update your personal information.",
          "Withdraw consent where applicable.",
          "Request deletion of your account or data.",
        ],
      },
      {
        heading: "Changes to This Policy",
        text:
          "We may update this Privacy Policy periodically. All updates will be published on this page.",
      },
      {
        heading: "Contact Us",
        text: "For privacy-related questions, contact us at admin@ametecsindia.com.",
      },
    ],
  },

  "/terms-of-use": {
    title: "Terms of Use",
    subtitle:
      "Rules and conditions governing the use of Ametecs platforms and services.",
    sections: [
      {
        heading: "Acceptance of Terms",
        text:
          "By accessing or using our website and services, you agree to be bound by these terms.",
      },
      {
        heading: "Modification of Terms",
        text:
          "We reserve the right to update or modify these terms at any time without prior notice.",
      },
      {
        heading: "User Conduct",
        points: [
          "Do not misuse the platform or violate applicable laws.",
          "No unauthorized access, interference, or data misuse.",
          "Respect all users and platform guidelines.",
        ],
      },
      {
        heading: "Intellectual Property",
        text:
          "All content, software, trademarks, and intellectual property belong to Ametecs India Private Limited.",
      },
      {
        heading: "Limitation of Liability",
        text:
          "Ametecs shall not be liable for indirect, incidental, or consequential damages.",
      },
      {
        heading: "Termination",
        text:
          "We may suspend or terminate access for any violation of these terms.",
      },
      {
        heading: "Governing Law",
        text:
          "These terms shall be governed and interpreted according to the laws of India.",
      },
      {
        heading: "Contact",
        text: "Email: admin@ametecsindia.com",
      },
    ],
  },

  "/refund-policy": {
    title: "Refund Policy",
    subtitle:
      "Terms and conditions related to refunds, cancellations, and payment processing.",
    sections: [
      {
        heading: "Eligibility",
        text:
          "Refunds are applicable only if requested within 7 days of purchase and the service has not been consumed.",
      },
      {
        heading: "Non-Refundable Items",
        points: [
          "Customized software or solutions.",
          "Activated licenses or used services.",
          "Delivered digital products.",
        ],
      },
      {
        heading: "Cancellation Process",
        text:
          "To cancel a service or subscription, email us with your order ID and reason for cancellation.",
      },
      {
        heading: "Processing Time",
        text:
          "Approved refunds will be processed within 7–10 business days to the original payment method.",
      },
      {
        heading: "Disputes",
        text:
          "In case of disputes, Ametecs’ decision shall be final and binding.",
      },
      {
        heading: "Contact",
        text: "For refund-related inquiries, email admin@ametecsindia.com.",
      },
    ],
  },

  "/disclaimer": {
    title: "Disclaimer",
    subtitle:
      "Legal clarification regarding SmartDCM and related platforms.",
    sections: [
      {
        heading: "Platform Disclaimer",
        text:
          "SmartDCM is a technology platform developed by Ametecs India Private Limited.",
      },
      {
        heading: "We Do Not",
        points: [
          "Perform debt collection activities.",
          "Call customers on behalf of clients.",
          "Guarantee recovery or performance outcomes.",
          "Provide legal advice.",
          "Control customer behavior or telecom network performance.",
          "Assume responsibility for misuse by client agents.",
        ],
      },
      {
        heading: "Compliance Responsibility",
        text:
          "All regulatory and operational compliance remains the responsibility of NBFCs and agencies using the platform.",
      },
    ],
  },

  "/data-protection": {
    title: "Data Protection & Compliance",
    subtitle:
      "Our approach to safeguarding customer and business data in accordance with Indian regulations.",
    sections: [
      {
        heading: "Compliance Framework",
        points: [
          "DPDP Act, 2023",
          "Information Technology Act, 2000",
          "RBI Digital Lending & Debt Collection Guidelines",
          "TRAI UCC Regulations",
          "DoT Telecom Consumer Protection Rules",
        ],
      },
      {
        heading: "Data Security Controls",
        points: [
          "AES-256 encrypted data storage.",
          "HTTPS / TLS secure communication.",
          "Masked account and mobile numbers.",
          "Role-based access controls.",
          "Audit logs and secure call recording storage.",
        ],
      },
      {
        heading: "Data Usage Principles",
        points: [
          "Data used strictly for client operations.",
          "No selling or sharing for advertising.",
          "Access granted only with authorization.",
          "Data hosted on India-based servers.",
        ],
      },
      {
        heading: "Data Retention",
        points: [
          "CRM data as per contractual agreement.",
          "Call recordings retained for 30–180 days.",
          "Audit logs retained up to 12 months.",
        ],
      },
      {
        heading: "Incident Management",
        text:
          "All security incidents are logged, investigated, and reported as per regulatory requirements.",
      },
      {
        heading: "Contact",
        text:
          "Email: ejaz@ametecsindia.com | Phone: +91 90000 98877",
      },
    ],
  },
};

export default function PolicyPage() {
  const { pathname } = useLocation();
  const policy = POLICIES[pathname];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  if (!policy) return null;

  return (
    <div className="bg-[#F4FAFC] min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#006699] text-white pt-28 pb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-40 -top-40 w-[420px] h-[420px] bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 max-w-5xl relative">
          <h1 className="text-3xl md:text-4xl font-bold">
            {policy.title}
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl">
            {policy.subtitle}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-10">
          {/* LEFT NAV */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="bg-white rounded-xl border p-4 space-y-1">
              {POLICY_LIST.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md text-sm font-medium ${
                    pathname === item.path
                      ? "bg-[#006699] text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-8">
            {policy.sections.map((sec, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#006699] mb-2">
                  {sec.heading}
                </h3>
                {sec.text && (
                  <p className="text-slate-700 text-sm mb-3">
                    {sec.text}
                  </p>
                )}
                {sec.points && (
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {sec.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
