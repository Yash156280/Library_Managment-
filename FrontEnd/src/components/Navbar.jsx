import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Library System</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/add">Add Book</Link>
        <Link to="/borrowed">Borrowed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
