export default function ResumeApplyModal({ jobTitle, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full">
        <h3 className="font-bold text-lg mb-4">
          Apply for {jobTitle}
        </h3>

        <form
          action="mailto:careers@ametecsindia.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded mb-3"
            required
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="file"
            name="resume"
            className="w-full mb-4"
            required
          />

          <div className="flex gap-3">
            <button className="bg-[#006699] text-white px-4 py-2 rounded">
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
