import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-opacity-50 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/736x/10/26/9e/10269ec42b4b3aa81bef815f8bdf521f.jpg"
          alt="Aura Tunes Logo"
          className="w-14 h-14 rounded-full"
        />
        <span className="text-3xl font-serif italic text-gray-800">Aura Tunes</span>
      </div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium drop-shadow-md">
        <li><a href="#" className="text-white font-bold hover:underline hover:text-pink-700">Home</a></li>
        <li><a href="#" className="hover:underline hover:text-purple-700">Discover</a></li>
        <li><a href="#" className="hover:underline hover:text-blue-700">Playlists</a></li>
        <li><a href="#" className="hover:underline hover:text-teal-700">About</a></li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <div className="relative border border-gray-300 rounded-full overflow-hidden bg-white px-4 py-2 flex items-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.1-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-800 focus:outline-none"
          />
        </div>
        <button className="px-4 py-2 border border-white bg-transparent text-white rounded-full hover:bg-white hover:text-pink-600">
          Sign In
        </button>
        <button className="px-4 py-2 border border-pink-400 bg-white text-pink-400 rounded-full hover:bg-pink-100">
          Log In
        </button>
      </div>
      <button className="md:hidden text-gray-700 text-2xl bg-pink-200 p-2 rounded-md">
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;

