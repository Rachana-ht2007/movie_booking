import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

export default function Booking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    venue: "VIP Premiere Screening",
    stand: "Standard",
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Insert data into Supabase 'bookings' table
      const { data, error } = await supabase
        .from("bookings")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            venue: formData.venue,
            stand: formData.stand,
            tickets: Number(formData.tickets),
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      console.log("Booking saved successfully:", data);
      
      // Redirect user to the history page after a successful save
      navigate("/history");
    } catch (err) {
      console.error("Error saving booking:", err.message);
      setErrorMessage(err.message || "Failed to save booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep text-main py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-800">
        
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e07a5f] font-semibold mb-2 block">
            Reservation
          </span>
          <h1 className="text-2xl font-extrabold text-white">Book Your Seats</h1>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 text-xs rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-[#e07a5f]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-[#e07a5f]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Venue / Event</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-[#e07a5f]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Seating Stand</label>
            <select
              name="stand"
              value={formData.stand}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-[#e07a5f]"
            >
              <option value="Standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="Balcony">Balcony</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Number of Tickets</label>
            <input
              type="number"
              name="tickets"
              min="1"
              max="10"
              required
              value={formData.tickets}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-[#e07a5f]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full py-3 bg-[#e07a5f] hover:bg-[#d0694f] text-white font-bold text-xs uppercase tracking-wider rounded transition duration-200 disabled:opacity-50"
          >
            {loading ? "Saving to Cloud..." : "Confirm Booking"}
          </button>
        </form>

      </div>
    </div>
  );
}