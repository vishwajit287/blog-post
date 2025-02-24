import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-600">{blog.excerpt}</p>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 inline-block">
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
