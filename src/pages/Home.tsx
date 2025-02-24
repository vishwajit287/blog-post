import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: "React Hooks Guide",
      excerpt: "Master useState, useEffect...",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Vite vs CRA",
      excerpt: "Why Vite is the better choice...",
      author: "Jane Doe",
    },
  ];

  return (
    <Layout>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-600 mt-2">
          Discover the latest insights, guides, and tutorials.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Latest Blogs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/blogs"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            View All Blogs →
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;


