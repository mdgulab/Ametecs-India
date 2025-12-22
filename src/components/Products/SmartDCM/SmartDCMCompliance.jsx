export default function SmartDCMCompliance() {

  return (
    <section className="relative bg-[#F4FAFC] min-h-screen py-24 overflow-hidden">

      {/* Authority background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F4FAFC,transparent_60%),radial-gradient(circle_at_70%_30%,#00669914,transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= SYSTEM HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">

          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#006699] font-semibold">
              SmartRMI • Regulatory Integrity System
            </p>

            <h1 className="mt-4 text-4xl font-bold text-[#003F5C] leading-tight max-w-3xl">
              Compliance Is No Longer Manual.
              <span className="text-[#F99900]"> It Is Enforced by Design.</span>
            </h1>

            <p className="mt-6 text-lg text-[#003F5C]/75 max-w-3xl">
              SmartRMI continuously monitors behavioural risk across live debt
              collection calls — identifying violations before they become
              penalties, escalation or reputation damage.
            </p>
          </div>

          {/* SYSTEM STATE */}
          <div className="flex items-center gap-3 px-5 py-3 border border-[#006699]/30 rounded-full bg-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-[#07da00] animate-pulse" />
            <span className="text-sm text-[#003F5C]">
              Regulatory Monitoring Active
            </span>
          </div>
        </div>

        {/* ================= AI DECISION STRIP ================= */}
        <div className="mt-20 border border-[#006699]/25 rounded-2xl bg-white/90 p-8 flex flex-col lg:flex-row gap-10 items-center">

          {/* AI CORE */}
          <div className="relative w-44 h-44 rounded-full border border-[#006699]/30 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#F99900]/40 animate-spin-slow" />
            <div className="text-center">
              <p className="text-xs tracking-widest text-[#006699]">
                AI CORE
              </p>
              <p className="font-bold text-[#003F5C]">
                Behaviour Engine
              </p>
            </div>
          </div>

          {/* AI LOGIC */}
          <div className="flex-1 space-y-4 text-sm text-[#003F5C]/85">
            <p>• Extracts tone, pitch, energy & interruption signals</p>
            <p>• Maps patterns against compliant communication models</p>
            <p>• Flags deviation without speech-to-text</p>
            <p>• Routes only risky calls to human reviewers</p>
          </div>
        </div>

        {/* ================= COMMAND GRID ================= */}
        <div className="mt-24 grid lg:grid-cols-12 gap-10">

          {/* ===== LEFT : COMPLIANCE HEALTH ===== */}
          <div className="lg:col-span-5 bg-white/90 border border-[#006699]/25 rounded-2xl p-8">
            <p className="text-xs tracking-widest uppercase text-[#006699] font-semibold">
              Compliance Health
            </p>

            <Health label="Portfolio Integrity" value={92} />
            <Health label="Agent Behaviour Stability" value={87} />
            <Health label="Escalation Risk" value={18} inverted />

            <p className="mt-6 text-xs text-[#003F5C]/70">
              Health indicators reflect rolling 30-day behavioural analysis.
            </p>
          </div>

          {/* ===== CENTER : 30-DAY TRAJECTORY ===== */}
          <div className="lg:col-span-4 bg-[#F4FAFC] border border-[#006699]/20 rounded-2xl p-8">
            <p className="text-xs tracking-widest uppercase text-[#006699] font-semibold">
              30-Day Risk Trajectory
            </p>

            <div className="mt-6 space-y-5">
              <Trajectory label="High-Risk Calls" change="-18%" />
              <Trajectory label="Audit Escalations" change="-22%" />
              <Trajectory label="Behaviour Violations" change="-14%" />
            </div>

            <p className="mt-6 text-xs text-[#003F5C]/70">
              Directional movement indicates systemic improvement.
            </p>
          </div>

          {/* ===== RIGHT : FLAGGED CALL ===== */}
          <div className="lg:col-span-3 bg-white border border-[#F99900]/40 rounded-2xl p-8">
            <p className="text-xs tracking-widest uppercase text-[#F99900] font-semibold">
              Active Alert
            </p>

            <h3 className="mt-3 font-bold text-[#003F5C]">
              High-Risk Call Identified
            </h3>

            <p className="mt-4 text-sm text-[#003F5C]/80">
              Aggression spike detected between <strong>02:14–03:02</strong>
            </p>

            <div className="mt-4 text-sm">
              <span className="font-semibold text-[#003F5C]">
                Agent:
              </span>{" "}
              AG-219
            </div>

            <div className="mt-4 px-4 py-2 rounded-full bg-[#F99900]/15 inline-block text-sm">
              Risk Score: 82%
            </div>

            <p className="mt-4 text-xs text-[#003F5C]/70">
              Status: Awaiting Human Review
            </p>
          </div>
        </div>

        {/* ================= GOVERNANCE ================= */}
        <div className="mt-24 border-t border-[#006699]/20 pt-8 text-xs text-[#003F5C]/70 max-w-5xl">
          SmartRMI operates strictly as a decision-support system. It does not
          automate penalties, enforcement or regulatory actions. All outcomes
          remain under human compliance authority.
        </div>

      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Health({ label, value, inverted }) {
  return (
    <div className="mt-6">
      <div className="flex justify-between text-sm text-[#003F5C]">
        <span>{label}</span>
        <span className="font-semibold">
          {inverted ? `${value}%` : `${value}%`}
        </span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#006699]/15">
        <div
          className="h-2 rounded-full bg-[#006699]"
          style={{ width: `${inverted ? 100 - value : value}%` }}
        />
      </div>
    </div>
  );
}

function Trajectory({ label, change }) {
  return (
    <div className="flex justify-between text-sm text-[#003F5C]">
      <span>{label}</span>
      <span className="font-semibold text-[#006699]">{change}</span>
    </div>
  );
}
