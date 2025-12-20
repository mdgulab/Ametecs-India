import { blogs } from "./blogs";

import { Link } from "react-router-dom";

export default function BlogSidebar() {
  return (
    <aside className="bg-[#006699] rounded-2xl p-6 border border-[#D9EAF0]">
      <h3 className="text-lg font-semibold text-[#ffffff] mb-6">
        Recent Blogs
      </h3>

      <ul className="space-y-4">
        {blogs.slice(0, 5).map((blog) => (
          <li key={blog.id}>
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-sm text-[#dadadaff] hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
