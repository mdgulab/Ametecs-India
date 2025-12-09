export default function Services() {
  const data = [
    { title: "Custom Software Development", desc: "Enterprise grade solutions with modern tech." },
    { title: "AI / ML Automation", desc: "Speech analytics, chatbots, call intelligence." },
    { title: "Cloud Architecture", desc: "Secure, scalable cloud infra and DevOps." },
  ];

  return (
    <section id="services" className="bg-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div key={i} className="p-8 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
