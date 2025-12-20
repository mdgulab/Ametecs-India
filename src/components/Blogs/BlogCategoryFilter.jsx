export default function BlogCategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium border transition
          ${
            active === cat
              ? "bg-[#006699] text-white border-[#006699]"
              : "border-[#D9EAF0] text-[#0A2540] hover:bg-[#F4FAFC]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
