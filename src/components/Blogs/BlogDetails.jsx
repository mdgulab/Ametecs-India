import { useParams } from "react-router-dom";
import { blogs } from "./blogs";
import BlogSidebar from "./BlogSidebar";
import BlogSEO from "../SEO/blogSEO";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
<BlogSEO blog={blog} />
  if (!blog) {
    return (
      <div style={{ padding: 100, color: "black" }}>
        <h2>Blog not found</h2>
        <p>Slug: {slug}</p>
      </div>
      
    );
    
  }

  return (
    <>
      

      <section className="bg-[#F4FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-[#0A2540]">
              {blog.title}
            </h1>

            <p className="text-sm text-[#5B6B7A] mt-4">
              {blog.author} • {blog.date}
            </p>

            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-2xl my-10"
            />

            <div className="text-[#0A2540] leading-7 whitespace-pre-line">
              {blog.content}
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />

        </div>
      </section>
    </>
  );
}