import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axiosInstance.get('/qoute/favourites');
        setFavorites(response.data.data);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Favourites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p className="mb-2">"{favorite.content}"</p>
            <p className="text-right">- {favorite.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
