import { Helmet } from "react-helmet-async";

export default function BlogSEO({ blog }) {
  if (!blog) return null;

  return (
    <Helmet>
      <title>{blog.title} | Ametecs India</title>
      <meta name="description" content={blog.excerpt} />
    </Helmet>
  );
}
