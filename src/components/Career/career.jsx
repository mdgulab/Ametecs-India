import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";
import { jobData } from "../data/jobData";

const PER_PAGE = 8;

export default function Career() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState([]);
  const [mode, setMode] = useState([]);
  const [location, setLocation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [page, setPage] = useState(1);

  /* ================= FILTER LOGIC ================= */
  const filteredJobs = useMemo(() => {
    return jobData.filter((job) => {
      const s =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.skills.join(" ").toLowerCase().includes(search.toLowerCase());

      const d = dept.length === 0 || dept.includes(job.department);
      const m = mode.length === 0 || mode.includes(job.mode);
      const l = location.length === 0 || location.includes(job.location);
      const e = experience.length === 0 || experience.includes(job.experience);

      return s && d && m && l && e;
    });
  }, [search, dept, mode, location, experience]);

  const visibleJobs = filteredJobs.slice(0, page * PER_PAGE);

  /* ================= UI ================= */
  return (
    <div className="bg-[#F4FAFC] min-h-screen">

{/* ================= CAREER HERO ================= */}
<section className="relative bg-[#006699] text-white py-20 overflow-hidden">
  {/* soft background glow (minimal) */}
  <div className="absolute -top-32 -right-32 w-[380px] h-[380px] rounded-full bg-[#00B4D8]/30 blur-[140px]" />
  <div className="absolute -bottom-32 -left-32 w-[320px] h-[320px] rounded-full bg-white/10 blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* ===== LEFT CONTENT ===== */}
      <div className="max-w-xl">
        <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-white/70">
          Careers at Ametecs
        </span>

        <h1 className="text-4xl sm:text-4xl font-extrabold leading-tight">
          Build Your Career <br />
          with <span className="text-[#00B4D8]">Ametecs</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/80">
          Work on enterprise software, AI platforms and cloud systems
          used by banks and large organizations.
        </p>

        {/* quick highlights */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {["Enterprise SaaS", "AI & Automation", "Cloud Systems"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-4 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== RIGHT IMAGE ===== */}
      <div className="hidden lg:flex justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/career/career-home.webp"
            alt="Ametecs Careers"
            className="w-[500px] h-auto object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= FIND YOUR MATCH ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Find your match</h3>
              <p className="text-sm text-slate-500">
                Explore exciting career opportunities at Ametecs
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                {jobData.length} Open positions
              </span>
            </div>
          </div>

          <div className="mt-4 bg-white rounded-xl border px-4 py-3 flex items-center gap-3">
            <FiSearch className="text-slate-400" />
            <input
              placeholder="Search by skills or job title"
              className="w-full outline-none text-sm"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[260px,1fr] gap-8">

          {/* ================= FILTERS ================= */}
          <aside className="bg-white border rounded-xl p-5 h-fit sticky top-24">
            <FilterBox title="Department" options={[...new Set(jobData.map(j => j.department))]} state={dept} setState={setDept} />
            <FilterBox title="Work mode" options={[...new Set(jobData.map(j => j.mode))]} state={mode} setState={setMode} />
            <FilterBox title="Location" options={[...new Set(jobData.map(j => j.location))]} state={location} setState={setLocation} />
            <FilterBox title="Experience" options={[...new Set(jobData.map(j => j.experience))]} state={experience} setState={setExperience} />
          </aside>

          {/* ================= JOB LIST ================= */}
          <div className="space-y-5">
            <div className="text-xs text-slate-500">
              Showing {visibleJobs.length} of {filteredJobs.length} jobs
            </div>

            {visibleJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border rounded-xl p-6 hover:shadow transition"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {job.title}
                    </h3>
                    <p className="text-sm text-[#006699] font-medium">
                      Ametecs India Pvt Ltd
                    </p>
                  </div>

                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold h-fit">
                    {job.type}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <FiClock /> {job.experience} years
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin /> {job.location} ({job.mode})
                  </span>
                  <span className="flex items-center gap-1">
                    <FiBriefcase /> {job.department}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600">
                  {job.description}
                </p>

                <div className="mt-4 flex gap-3">
                  <Link
                    to={`/career/${job.id}`}
                    className="px-4 py-2 rounded-md bg-[#006699] text-white text-sm font-semibold"
                  >
                    View Job
                  </Link>
                  <Link
                    to={`/career/${job.id}`}
                    className="px-4 py-2 rounded-md border border-[#006699] text-[#006699] text-sm font-semibold"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}

            {visibleJobs.length < filteredJobs.length && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setPage(page + 1)}
                  className="px-6 py-2 border rounded-md text-sm"
                >
                  Load more jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= FILTER COMPONENT ================= */

function FilterBox({ title, options, state, setState }) {
  function toggle(val) {
    setState((p) =>
      p.includes(val) ? p.filter((x) => x !== val) : [...p, val]
    );
  }

  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-slate-500 uppercase mb-3">
        {title}
      </p>
      <div className="space-y-2 text-sm">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={state.includes(opt)}
              onChange={() => toggle(opt)}
              className="accent-[#006699]"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
