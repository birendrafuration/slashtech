import React from 'react';

const QuoteCard = ({ quote, author, onFavourite, isFavourite }) => {
  return (
    <div className="border p-4 rounded shadow">
      <p className="mb-2">"{quote}"</p>
      <p className="text-right">- {author}</p>
      <button 
        onClick={onFavourite} 
        className={`p-2 mt-2 ${isFavourite ? 'bg-red-500' : 'bg-green-500'} text-white`}
      >
        {isFavourite ? 'Unfavourite' : 'Favourite'}
      </button>
    </div>
  );
};

export default QuoteCard;
