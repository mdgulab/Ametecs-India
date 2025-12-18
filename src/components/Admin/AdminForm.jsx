import { useState } from "react";

export default function AdminForm({ onSave }) {
  const [job, setJob] = useState({
    id: "",
    title: "",
    location: "",
    experience: "",
    description: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(job);
      }}
      className="bg-white p-6 rounded shadow space-y-3"
    >
      {Object.keys(job).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full border p-2 rounded"
          value={job[key]}
          onChange={(e) =>
            setJob({ ...job, [key]: e.target.value })
          }
        />
      ))}

      <button className="bg-[#006699] text-white px-4 py-2 rounded">
        Save Job
      </button>
    </form>
  );
}
