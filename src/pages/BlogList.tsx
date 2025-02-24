import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { blogs } from "../data/blogData";

const BlogList = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 border rounded shadow-md">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="text-blue-500">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogList;
