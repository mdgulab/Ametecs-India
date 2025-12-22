export default function SmartDCMPricing() {
  return (
    <section className="py-28 bg-[#FFF2DE]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-[#003F5C]">
          Simple pricing.
          <span className="text-[#F99900]"> No surprises.</span>
        </h2>

        <div className="mt-12 space-y-6">
          <Row name="SmartDCM Platform" price="₹850 / user" />
          <Row name="Smart31 Calling" price="₹200 / number" />
          <Row name="SmartRMI AI Compliance" price="₹75 / user" />
        </div>

      </div>
    </section>
  );
}

function Row({ name, price }) {
  return (
    <div className="flex justify-between border-b pb-4">
      <span className="text-[#003F5C]">{name}</span>
      <span className="font-semibold text-[#F99900]">{price}</span>
    </div>
  );
}
