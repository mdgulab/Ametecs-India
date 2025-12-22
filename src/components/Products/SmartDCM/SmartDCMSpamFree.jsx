export default function SmartDCMSpamFree() {
  return (
    <section className="relative bg-[#F4FAFC] py-28 overflow-hidden">

      {/* Ambient system glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#F999001f,transparent_45%),radial-gradient(circle_at_80%_70%,#0066991f,transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== SYSTEM HEADER ===== */}
        <div className="flex flex-wrap justify-between items-end mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#006699] font-semibold">
              Smart31 • System Status
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#006699]">
              SPAM-Free Calling Control Panel
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#006699]/90">
            <span className="h-2.5 w-2.5 rounded-full bg-[#07da00ff] animate-pulse" />
            Live • Active
          </div>
        </div>

        {/* ===== MAIN DASHBOARD ===== */}
        <div className="grid lg:grid-cols-12 gap-10">

          {/* ===== LEFT : SYSTEM SIGNALS ===== */}
          <div className="lg:col-span-4 space-y-6">

            <Signal
              label="Caller ID Hygiene"
              value="Stable"
              desc="Daily rotating GSM / WebRTC numbers active"
            />

            <Signal
              label="Pickup Performance"
              value="+48%"
              desc="Improved right-party connections"
            />

            <Signal
              label="SPAM Risk Level"
              value="Low"
              desc="No critical flags detected"
            />

          </div>

          {/* ===== CENTER : AI CORE ===== */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-64 h-64 rounded-full border border-[#006699]/20 flex items-center justify-center">

              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#F99900]/40 animate-spin-slow" />

              {/* Inner pulse */}
              <div className="absolute w-24 h-24 rounded-full bg-[#F99900]/20 animate-ping" />

              {/* Core */}
              <div className="relative text-center">
                <p className="text-xs tracking-widest text-[#006699]">
                  AI CORE
                </p>
                <p className="mt-1 font-bold text-[#003F5C]">
                  Smart31 Engine
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT : CONTROL STATES ===== */}
          <div className="lg:col-span-4 space-y-6">

            <State text="TRAI & DoT aligned calling rules applied" />
            <State text="Flagged numbers auto-replaced" />
            <State text="Campaign-level caller mapping active" />
            <State text="Audit logs continuously generated" />

            <div className="mt-6 border-l-4 border-[#F99900] pl-4 text-sm text-[#003F5C]/80">
              Outcome: Higher trust, higher pickup rates, and audit-ready
              calling without operational friction.
            </div>

          </div>
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="mt-20 pt-8 border-t border-[#006699]/20 text-xs text-[#003F5C]/70 max-w-4xl">
          System signals are derived from live SmartDCM deployments and
          continuously evaluated against telecom and BFSI calling norms.
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Signal({ label, value, desc }) {
  return (
    <div className="bg-white/90 backdrop-blur border border-[#006699]/50 rounded-xl p-5">
      <p className="text-xs uppercase tracking-wide text-[#006699]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold text-[#F99900]">
        {value}
      </p>
      <p className="mt-1 text-sm text-[#003F5C]">
        {desc}
      </p>
    </div>
  );
}

function State({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm text-[#003F5C]">
      <span className="mt-1 h-2 w-2 rounded-full bg-[#F99900]" />
      {text}
    </div>
  );
}
