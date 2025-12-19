export default function Process({ steps }) {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-[#0A2540] mb-10">
        Our Process
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl text-center border
                       border-[#D9EAF0] hover:border-[#006699] transition"
          >
            <div className="text-[#006699] text-3xl font-bold mb-3">
              {i + 1}
            </div>
            <p className="font-medium text-[#0A2540]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
