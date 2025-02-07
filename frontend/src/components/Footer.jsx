import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <img
              src="https://i.pinimg.com/736x/10/26/9e/10269ec42b4b3aa81bef815f8bdf521f.jpg"
              alt="Aura Tunes Logo"
              className="mx-auto md:mx-0 w-24 h-24 rounded-full"
            />
            <p className="mt-4 text-lg italic">
              Discover the music that matches your vibe.
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
            <p><i className="fas fa-map-marker-alt mr-2"></i> New Delhi, India</p>
            <p><i className="fas fa-envelope mr-2"></i> support@auratunes.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white text-2xl"><i className="fab fa-youtube"></i></a>
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
