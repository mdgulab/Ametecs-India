export default function SmartDCMPlatform() {
  return (
    <section className="py-28 bg-[#F4FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">
          <span className="inline-block px-5 py-2 rounded-full bg-[#006699] text-white text-sm font-semibold">
            Platform Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#003F5C]">
            One System for the Entire
            <span className="text-[#F99900]"> Debt Collection Lifecycle</span>
          </h2>

          <p className="mt-6 text-lg text-[#003F5C]/80">
            SmartDCM brings calling, CRM, compliance and reporting into a single
            controlled system — designed for regulated financial institutions,
            not sales teams.
          </p>
        </div>

        {/* ================= WHAT IT CONTROLS ================= */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <Control
            title="Calling Control"
            desc="Smart dialers, SPAM-free numbers and strict connect-on-answer rules."
          />
          <Control
            title="Account & CRM"
            desc="Complete visibility of POS, allocations, PTPs, disputes and call history."
          />
          <Control
            title="Compliance Monitoring"
            desc="AI-assisted detection of tone, aggression and conduct risks."
            highlight
          />
          <Control
            title="Communication"
            desc="Voice, WhatsApp, SMS and Email managed from one place."
          />
          <Control
            title="Reporting & Audit"
            desc="NBFC dashboards, MIS exports and audit-ready evidence."
          />
          <Control
            title="Security & Access"
            desc="Role-based access, masked data and secure recordings."
          />

        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="mt-24 border border-[#006699]/25 rounded-xl bg-white p-8">
          <p className="text-sm font-semibold text-[#006699]">
            How SmartDCM Works
          </p>

          <div className="mt-6 grid md:grid-cols-4 gap-6 text-sm text-[#003F5C]/80">
            <Flow step="1" text="Collection activity happens inside the system" />
            <Flow step="2" text="Rules & controls are applied automatically" />
            <Flow step="3" text="AI highlights behavioural and compliance risk" />
            <Flow step="4" text="Humans review and take final decisions" />
          </div>
        </div>

        {/* ================= AI STATEMENT ================= */}
        <div className="mt-16 border-l-4 border-[#F99900] pl-6 text-sm text-[#003F5C]/80 max-w-4xl">
          AI in SmartDCM supports compliance teams by identifying risk patterns.
          It does not auto-penalize agents or replace human judgment.
        </div>

        {/* ================= DEPLOYMENT ================= */}
        <div className="mt-10 text-xs text-[#003F5C]/70 max-w-4xl">
          Supported deployments: On-Premise · Secure Cloud · Work-from-Home.
          Built for NBFCs, banks and regulator-audited environments.
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Control({ title, desc, highlight }) {
  return (
    <div
      className={`p-6 border rounded-xl ${
        highlight
          ? "border-[#F99900] bg-white"
          : "border-[#006699]/20 bg-white/80"
      }`}
    >
      <p className="font-semibold text-[#003F5C]">{title}</p>
      <p className="mt-3 text-sm text-[#003F5C]/75">{desc}</p>
    </div>
  );
}

function Flow({ step, text }) {
  return (
    <div className="flex gap-3">
      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#006699] text-white text-xs font-semibold">
        {step}
      </div>
      <p>{text}</p>
    </div>
  );
}
