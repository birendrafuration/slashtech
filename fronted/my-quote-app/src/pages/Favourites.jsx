import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(async() => {
    const response = await axios.get(`http://localhost:3000/api/v1/qoute/favourites`);
    setFavorites(response.data.data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Favourites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p className="mb-2">"{favorite.quote}"</p>
            <p className="text-right">- {favorite.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
