import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/736x/10/26/9e/10269ec42b4b3aa81bef815f8bdf521f.jpg"
          alt="Aura Tunes Logo"
          className="w-14 h-14 rounded-full"
        />
        <span className="text-3xl font-serif italic text-gray-800">Aura Tunes</span>
      </div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-pink-600 text-pink-600">Home</a></li>
        <li><a href="#" className="hover:text-purple-600">Discover</a></li>
        <li><a href="#" className="hover:text-purple-600">Playlists</a></li>
        <li><a href="#" className="hover:text-purple-600">About</a></li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
        <button className="px-4 py-2 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white">
          Sign In
        </button>
        <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
          Log In
        </button>
      </div>
      <button className="md:hidden text-gray-700 text-2xl">&#9776;</button>
    </nav>
  );
};

export default Navbar;
