import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">
          Blog Post
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/blogs" className="hover:underline">
            All Blogs
          </Link>
          <Link to="/add-blog" className="hover:underline">
            Add Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
