import { Link } from "react-router-dom";
import { blogs } from "./blogs";

export default function HomeBlogSection() {
  return (
    <section className="bg-[#F4FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-14 ">
          <div>
            <span className="text-sm font-semibold text-[#006699]">
              — Blog
            </span>

            <h2 className="text-4xl font-bold text-[#0A2540] mt-3">
              Our <span className="text-[#006699]">Blog</span>
            </h2>

            <p className="text-[#5B6B7A] mt-4 max-w-md">
              Words that describe our quality and keep us motivated
            </p>
          </div>

          {/* View All Blog (RIGHT SIDE) */}
          <Link
            to="/blogs"
            className="flex items-center gap-2 border border-[#006699]
            text-[#006699] px-6 py-3 rounded-full font-medium
            hover:bg-[#006699] hover:text-white transition"
          >
            View All Blog →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.slug}`}
              className="bg-white rounded-2xl border border-[#D9EAF0]
              hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-white text-xs px-3 py-1 rounded-full shadow">
                  {blog.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0A2540]">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#5B6B7A] mt-3">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
