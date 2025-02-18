import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ADD8E6] via-[#4FD1C5] to-[#ADD8E6] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pinimg.com/736x/10/26/9e/10269ec42b4b3aa81bef815f8bdf521f.jpg"
                alt="Aura Tunes Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-2xl font-serif italic">Aura Tunes</span>
            </div>
            <p className="mt-4 text-lg italic">
              Discover the music that matches your taste – Music syncs with your emotion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Discover</a></li>
              <li><a href="#" className="hover:underline">Playlists</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p>Punjab, India</p>
            <p>support@auratunes.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm opacity-80">
          &copy; 2025 Aura Tunes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
