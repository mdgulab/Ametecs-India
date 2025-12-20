import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="bg-white rounded-2xl overflow-hidden border border-[#D9EAF0]
      hover:shadow-xl transition"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-xs text-[#00B4D8]">{blog.date}</span>
        <h3 className="text-lg font-semibold text-[#0A2540] mt-2">
          {blog.title}
        </h3>
        <p className="text-[#5B6B7A] text-sm mt-2">
          {blog.excerpt}
        </p>
      </div>
    </Link>
  );
}
