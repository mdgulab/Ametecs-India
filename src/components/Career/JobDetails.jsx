import { useParams } from "react-router-dom";
import { jobData } from "./JobData";
import { FiMapPin, FiBriefcase, FiClock, FiLayers } from "react-icons/fi";

export default function JobDetails() {
  const { id } = useParams();

  // ✅ FIX 1: id string vs number issue
  const job = jobData.find((j) => String(j.id) === id);

  // ✅ SAFETY: job not found
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Job not found
      </div>
    );
  }

  return (
    <div className="bg-[#F4FAFC] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#006699] text-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="mt-2 text-white/80">
            Ametecs India Private Limited
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr,320px] gap-8">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-10">

            {/* ===== Job Overview ===== */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4">
                Job Overview
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div>
                  <p className="text-xs text-slate-500">Designation</p>
                  <p className="font-medium">{job.title}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Department</p>
                  <p className="font-medium">{job.department}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="font-medium">{job.experience} years</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Work Mode</p>
                  <p className="font-medium">{job.mode}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Job Type</p>
                  <p className="font-medium">{job.type}</p>
                </div>
              </div>
            </div>

            {/* ===== Job Description ===== */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-3">
                Job Description
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {job.fullDescription}
              </p>
            </div>

            {/* ===== Requirements ===== */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-3">
                Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                {(job.requirements || []).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* ===== Roles ===== */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-3">
                Roles & Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                {(job.roles || []).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* ===== Skills ===== */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-3">
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2">
                {(job.skills || []).map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= APPLY CARD ================= */}
          <aside className="bg-white rounded-xl border p-6 h-fit sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Apply for this job
            </h3>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex gap-2 items-center">
                <FiBriefcase className="text-[#006699]" />
                <span>{job.title}</span>
              </div>

              <div className="flex gap-2 items-center">
                <FiMapPin className="text-[#006699]" />
                <span>{job.location}</span>
              </div>

              <div className="flex gap-2 items-center">
                <FiClock className="text-[#006699]" />
                <span>{job.experience} years</span>
              </div>

              <div className="flex gap-2 items-center">
                <FiLayers className="text-[#006699]" />
                <span>{job.mode}</span>
              </div>
            </div>

            <button
              className="mt-6 w-full bg-[#006699] text-white py-3 rounded-lg font-semibold hover:bg-[#005580] transition"
            >
              Apply Now
            </button>

            <p className="text-xs text-slate-500 mt-3 text-center">
              Upload resume & details on next step
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
