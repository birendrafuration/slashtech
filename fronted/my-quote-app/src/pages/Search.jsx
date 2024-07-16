import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    console.log("****",query)
    try {
      const response = await axios.get(`https://api.quotable.io/search/quotes?query=${query}`);
console.log(response.data.results)
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching quotes', error);
    }
  };

  const addToFavorites = async(quote) => {
    console.log("*************add")
    setFavorites([...favorites, quote]);
    try {
        const payload = {
            qauteId:quote._id,
            content:quote.content,
            author:quote.author,
            authorId:quote.authorId ,
            authorSlug:quote.authorSlug ,
           
          };
        await axios.post('/api/v1/quote/favourites', payload);  
    } catch (error) {
        console.error('Error fetching or posting quotes:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for quotes..." 
          className="border p-2 w-full" 
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <div key={result._id} className="border p-4 rounded shadow">
            <p className="mb-2">"{result.author}"</p>
            <p className="text-right">- {result.content}</p>
            <button 
              onClick={() => addToFavorites(result)} 
              className="bg-green-500 text-white p-2 mt-2"
            >
              Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
