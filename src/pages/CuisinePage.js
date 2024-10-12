import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const CuisinePage = () => {
  const { type: cuisineType } = useParams(); 

  const cuisines = {
    Spanish: [
      {
        name: "Seafood fideuà",
        image: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
      },
      {
        name: "Spanish Tortilla",
        image: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
      },
      {
        name: "Roast fennel and aubergine paella",
        image: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
      },
    ],
    Italian: [
      {
        name: "Spaghetti alla Carbonara",
        image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      },
      {
        name: "Lasagne",
        image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      },
      {
        name: "Pizza Express Margherita",
        image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      },
    ],
    Thaïlandian : [
      {
        name: "Pad See Ew",
        image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
      },
      {
        name: "Thai Green Curry",
        image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
      },
      {
        name: "Massaman Beef curry",
        image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
      },
    ],
  };


  const recipes = cuisines[cuisineType] || [];

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-[#008B8B]">{cuisineType} Cuisine</h1>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#008B8B]">
          {recipes.map((recipe, index) => (
            <div key={index}>
             
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#008B8B]">No recipes available for this cuisine.</p>
      )}
    </div>
  );
};

export default CuisinePage;




