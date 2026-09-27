import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 classy-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="nav-brand text-lg" style={{ textDecoration: 'none' }}>
          <span className="text-[#e07a5f]">❖</span> CINE<span className="text-[#e07a5f]">LUXE</span>
        </Link>

        {/* Navigation Links in your exact order */}
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>

          <Link 
            to="/movies" 
            className={`nav-link ${location.pathname === "/movies" ? "active" : ""}`}
            style={{ textDecoration: 'none' }}
          >
            Movies
          </Link>

          {/* Corrected path pointing directly to the booking suite */}
          <Link 
            to="/booking" 
            className="btn-gold text-xs uppercase tracking-wider px-5 py-2.5"
            style={{ textDecoration: 'none' }}
          >
            Book Now
          </Link>

          <Link 
            to="/history" 
            className={`nav-link ${location.pathname === "/history" ? "active" : ""}`}
            style={{ textDecoration: 'none' }}
          >
            My Bookings
          </Link>
        </div>

      </div>
    </nav>
  );
}