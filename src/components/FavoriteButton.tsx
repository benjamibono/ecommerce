import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

interface FavoriteButtonProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
      aria-label={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isFavorite(product.id) ? 'text-red-500' : 'text-gray-400'}`}
        fill={isFavorite(product.id) ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton; 