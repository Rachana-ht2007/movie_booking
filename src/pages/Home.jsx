import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredMovies = [
    {
      id: 1,
      title: "Interstellar Odyssey",
      genre: "Sci-Fi / Adventure",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Cyber City Chronicles",
      genre: "Action / Thriller",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Neon Shadows",
      genre: "Drama / Mystery",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-deep text-main">
      {/* Soft Pastel Hero Section */}
      <div 
        className="relative h-[480px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(252, 251, 250, 0.4), rgba(252, 251, 250, 0.95)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="text-center px-4 max-w-3xl z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e07a5f] font-semibold mb-3 block">
            The Ultimate VIP Cinema Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide gold-gradient-text">
            Cinematic Luxury Awaits
          </h1>
          <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
            Immerse yourself in state-of-the-art viewings. Reserve your private or standard premiere seats today.
          </p>
          <Link 
            to="/movies" 
            className="btn-gold px-8 py-3.5 text-xs uppercase tracking-wider"
            style={{ textDecoration: 'none' }}
          >
            Explore Screenings
          </Link>
        </div>
      </div>

      {/* Trending Movies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-serif tracking-wide text-main flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e07a5f] inline-block"></span> Now Premiering
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <div 
              key={movie.id} 
              className="classy-card rounded-xl overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#b85b5b] border border-[#e07a5f]/30 text-[10px] tracking-widest font-semibold px-3 py-1 rounded-full uppercase shadow-sm">
                  VIP Available
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-wide mb-1 text-main">{movie.title}</h3>
                  <p className="text-gray-500 text-xs tracking-wider uppercase mb-6">{movie.genre}</p>
                </div>
                
                <Link 
                  to={`/booking/${movie.id}`}
                  className="block text-center border border-[#e07a5f]/40 hover:bg-[#e07a5f] hover:text-white text-[#b85b5b] text-xs tracking-wider uppercase py-2.5 rounded-lg transition duration-300 font-medium"
                  style={{ textDecoration: 'none' }}
                >
                  Select Seats
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}