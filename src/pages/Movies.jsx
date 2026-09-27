import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [filter, setFilter] = useState("All");

  const allMovies = [
    {
      id: 1,
      title: "Interstellar Odyssey",
      genre: "Sci-Fi",
      duration: "2h 49m",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Cyber City Chronicles",
      genre: "Action",
      duration: "2h 15m",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Neon Shadows",
      genre: "Drama",
      duration: "1h 58m",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "The Grand Illusion",
      genre: "Mystery",
      duration: "2h 05m",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredMovies = filter === "All" 
    ? allMovies 
    : allMovies.filter(m => m.genre === filter);

  return (
    <div className="min-h-screen bg-deep text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2 block">
            Now Screening
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide gold-gradient-text">
            Choose Your Feature
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Sci-Fi", "Action", "Drama", "Mystery"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition duration-300 ${
                filter === category
                  ? "bg-gold text-black font-semibold shadow-lg"
                  : "bg-[#141418] text-gray-400 border border-gold/20 hover:border-gold/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {filteredMovies.map((movie) => (
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
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-gold border border-gold/30 text-[10px] tracking-widest font-semibold px-2.5 py-1 rounded uppercase">
                  {movie.duration}
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-medium tracking-wide mb-1 text-white">{movie.title}</h3>
                  <p className="text-gray-400 text-xs tracking-wider uppercase mb-5">{movie.genre}</p>
                </div>
                
                <Link 
                  to={`/booking/${movie.id}`}
                  className="block text-center border border-gold/40 hover:bg-gold hover:text-black text-gold text-xs tracking-wider uppercase py-2.5 rounded transition duration-300 font-medium"
                  style={{ textDecoration: 'none' }}
                >
                  Book Seats
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}