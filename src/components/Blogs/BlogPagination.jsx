export default function BlogPagination({ current, total, onChange }) {
  return (
    <div className="flex justify-center mt-16 gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={`w-10 h-10 rounded-full border text-sm font-medium
          ${
            current === i + 1
              ? "bg-[#006699] text-white border-[#006699]"
              : "border-[#D9EAF0] text-[#0A2540] hover:bg-[#F4FAFC]"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
