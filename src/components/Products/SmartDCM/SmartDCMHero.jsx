export default function SmartDCMHero() {
  return (
    <section className="bg-[#006699] text-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10">
            For Banks & NBFCs
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            SmartDCM —
            <span className="text-[#F99900]"> AI-Driven</span><br />
            Debt Collection Platform
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            A unified system for SPAM-free calling, AI compliance
            and large-scale debt collection operations.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-[#F99900] hover:bg-[#C77700] text-white px-8 py-3 rounded-lg font-semibold">
              Request Demo
            </button>
            <button className="border border-white px-8 py-3 rounded-lg">
              SPAM-Free Audit
            </button>
          </div>
        </div>

        <div className="bg-white/95 text-[#003F5C] rounded-2xl p-8 shadow-xl">
          <h4 className="font-semibold mb-6 text-[#006699]">
            Live Platform Metrics
          </h4>
          <div className="grid grid-cols-3 text-center gap-6">
            <Metric value="1020+" label="Agents" />
            <Metric value="+48%" label="Pickup Rate" />
            <Metric value="92%" label="Compliance" />
          </div>
        </div>

      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-[#F99900]">{value}</p>
      <p className="text-sm text-[#003F5C]/70">{label}</p>
    </div>
  );
}
