import { useState } from "react";
import { jobData } from "../data/jobData";
import AdminForm from "./AdminForm";

export default function AdminJobs() {
  const [jobs, setJobs] = useState(jobData);

  function addJob(job) {
    setJobs([...jobs, job]);
  }

  return (
    <div className="p-10 bg-[#F4FAFC] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Job CMS</h1>

      <AdminForm onSave={addJob} />

      <ul className="mt-6 space-y-2">
        {jobs.map((job) => (
          <li key={job.id} className="bg-white p-4 rounded shadow">
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
