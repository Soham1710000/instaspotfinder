// InstaSpotFinder Frontend - Clean & Deployable Version
// File: client/src/App.jsx

import { useState } from 'react';

function App() {
  const [country, setCountry] = useState('');
  const [spots, setSpots] = useState([]);

  const fetchSpots = async () => {
    if (!country.trim()) return;
    const res = await fetch(`/api/spots?country=${country}`);
    const data = await res.json();
    setSpots(data);
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📸 InstaSpot Finder</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Enter Country (e.g. UAE, Thailand, Turkey...)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={fetchSpots}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spots.map((spot, idx) => (
          <div key={idx} className="border rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-1">{spot.name}</h2>
            <p>📍 {spot.location}</p>
            <p>🕒 Best time: {spot.bestTime}</p>
            <p>👗 Outfit: <a href={spot.outfitLink} target="_blank" className="text-blue-500 underline">Myntra</a></p>
            <img src={spot.imageUrl} alt={spot.name} className="w-full h-60 object-cover rounded my-2" />
            <p className="text-sm text-gray-500">#hashtags: {spot.hashtags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
