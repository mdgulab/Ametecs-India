import BlogHero from "./BlogHero";
import BlogCard from "./BlogCard";
import { blogs } from "./blogs";
import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogPagination from "./BlogPagination";
import { useState } from "react";



const BLOGS_PER_PAGE = 6;

export default function BlogList() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filtered =
    category === "All"
      ? blogs
      : blogs.filter(b => b.category === category);

  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);
  const start = (page - 1) * BLOGS_PER_PAGE;
  const visibleBlogs = filtered.slice(start, start + BLOGS_PER_PAGE);

  return (
    <>
      <BlogHero />

      <section className="bg-[#F4FAFC]  py-24">
        <div className="max-w-7xl mx-auto px-6">

          <BlogCategoryFilter
            categories={categories}
            active={category}
            onChange={(cat) => {
              setCategory(cat);
              setPage(1);
            }}
          />

          <div className="grid md:grid-cols-3 gap-10">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <BlogPagination
            current={page}
            total={totalPages}
            onChange={setPage}
          />

        </div>
      </section>
    </>
  );
}