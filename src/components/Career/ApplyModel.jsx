import { useState } from "react";

export default function ApplyModal({ job, onClose }) {
  const [resume, setResume] = useState(null);

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("jobId", job.id);
    formData.append("resume", resume);

    alert(`Resume submitted for ${job.title}`);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={submit}
        className="bg-white rounded-xl p-6 w-full max-w-md"
      >
        <h3 className="text-lg font-bold mb-2">
          Apply for {job.title}
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          Location: {job.location} | {job.mode}
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setResume(e.target.files[0])}
          className="mb-4"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-[#006699] text-white py-2 rounded-md"
          >
            Submit Application
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 border py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
