import { Link } from "react-router-dom";
import PageHero from "./pageHero";
import { servicesData } from "./servicesData";

export default function Services() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="Enterprise-grade technology, design and growth solutions tailored for modern businesses."
      />

      {/* SERVICES GRID */}
      <section className="bg-[#F4FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D9EAF0]
                           hover:border-[#006699] hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`/services/${service.id}.gif`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-[#006699]/80 opacity-0 
                               group-hover:opacity-100 transition flex items-center justify-center"
                  >
                    <span className="text-white font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">
                    {service.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
