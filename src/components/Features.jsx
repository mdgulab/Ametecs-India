export default function Features() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us?</h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">AI Driven</h3>
          <p className="text-gray-600">Smart automation & deep analytics.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">Secure & Scalable</h3>
          <p className="text-gray-600">Cloud native solutions built for scale.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">End-to-End Support</h3>
          <p className="text-gray-600">From development to deployment.</p>
        </div>

      </div>
    </section>
  );
}
