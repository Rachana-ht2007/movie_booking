import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase"; // Adjust path if necessary

export default function History() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error.message);
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-deep text-main py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e07a5f] font-semibold mb-2 block">
            Cloud Records
          </span>
          <h1 className="text-3xl font-extrabold gold-gradient-text">
            Booking History
          </h1>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-12 text-sm">
            Loading your bookings from Supabase...
          </div>
        ) : bookings.length > 0 ? (
          <div className="flex flex-col gap-4">
            {bookings.map((item) => (
              <div key={item.id} className="history-card flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs text-gray-400 font-semibold">Booking ID: #{item.id}</span>
                  <h3 className="text-lg font-bold text-main mt-0.5">{item.venue || "VIP Premiere Screening"}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Name: <span className="font-semibold text-main">{item.name}</span> &bull; 
                    Email: <span className="font-semibold text-main">{item.email}</span> &bull; 
                    Seats: <span className="font-semibold text-main">{item.stand}</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-5">
                  <span className="text-sm font-bold text-[#e07a5f]">₹{item.tickets * 250}</span>
                  <span className="badge-confirmed">
                    Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="booking-summary-card text-center py-12">
            <p className="text-gray-400 text-sm mb-4">No bookings found in your cloud database yet.</p>
            <Link to="/booking" className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider" style={{ textDecoration: 'none' }}>
              Book Now
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}