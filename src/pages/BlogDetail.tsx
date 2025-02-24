import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import Layout from "../components/Layout";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-red-600">Blog Not Found</h1>
          <p className="mt-4 text-gray-600">
            The blog you are looking for does not exist.
          </p>
          <Link to="/blogs" className="text-blue-500 mt-4 inline-block">
            ← Back to Blogs
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-600">
          Published by {blog.author} on {blog.publishedDate}
        </p>
        <p className="mt-4 text-lg">{blog.content}</p>
        <Link to="/blogs" className="text-blue-500 mt-6 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    </Layout>
  );
};

export default BlogDetail;
