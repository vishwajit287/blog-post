import { useState } from "react";
import Layout from "../components/Layout";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, excerpt, author });

    // Clear the form
    setTitle("");
    setExcerpt("");
    setAuthor("");
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Blog Excerpt"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
