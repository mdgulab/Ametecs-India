export default function ServiceContactForm({ service }) {
  function submit(e) {
    e.preventDefault();
    const f = e.target;

    const msg = `
New Service Inquiry
Service: ${service}

Name: ${f.firstName.value} ${f.lastName.value}
Email: ${f.email.value}
Phone: ${f.phone.value}

Message:
${f.message.value}
    `;

    const phone = "917322822761"; // apna number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <section className="bg-[#006699]/50 pt-10 pb-10">
      {/* HEADER */}
      <div className="text-center text-white mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          We're just a message away, connect with us now
        </h2>

        <div className="flex justify-center gap-4 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <span className="text-red-500">*</span> Competitive Advantage
          </span>
          <span className="flex items-center gap-2">
            <span className="text-red-500">*</span> Talented Resources
          </span>
          <span className="flex items-center gap-2">
            <span className="text-red-500">*</span> Guaranteed Quality
          </span>
        </div>
      </div>

      {/* CARD */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-xl grid md:grid-cols-2 overflow-hidden">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex items-center justify-center bg-[#00a5ecff]/10 p-10">
            <img
              src="./contact-illustration.png"
              alt="Contact"
              className="max-w-sm"
            />
          </div>

          {/* FORM */}
          <form onSubmit={submit} className="p-2 space-y-2">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name*</label>
                <input
                  name="firstName"
                  required
                  className="w-full mt-1 p-3 border rounded"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  name="lastName"
                  className="w-full mt-1 p-3 border rounded"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-3 border rounded"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                placeholder="+91"
                className="w-full mt-1 p-3 border rounded"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="message"
                rows="4"
                className="w-full mt-1 p-3 border rounded"
              />
            </div>

            {/* SERVICE (HIDDEN DEFAULT) */}
            <input type="hidden" value={service} />

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#006699] hover:bg-white-700 text-white px-8 py-3 rounded font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
