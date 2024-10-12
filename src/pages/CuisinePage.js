import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const CuisinePage = () => {
  const { type: cuisineType } = useParams(); 

  const cuisines = {
    Maroccan: [
      {
        name: "Tajin",
        image: "https://th.bing.com/th/id/R.6b1e194d390dc23aca7f86a392214b10?rik=tZCYKhL57xKI0w&pid=ImgRaw&r=0",
      },
      {
        name: "Pastilla",
        image: "https://thumbs.dreamstime.com/b/fresh-baked-moroccan-fish-pastilla-close-up-239501736.jpg",
      },
      {
        name: "Couscous",
        image: "https://i.pinimg.com/originals/4c/53/56/4c5356b715ae1a13cc815888e0244ef6.jpg",
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
    Mexican: [
      {
        name: "Tacos",
        image: "https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg",
      },
      {
        name: "chile relleno",
        image: "https://th.bing.com/th/id/R.da960f9ac204694e839ec6d59909844e?rik=3qOLd07U3TKgdA&riu=http%3a%2f%2fwww.chowstatic.com%2fassets%2f2014%2f09%2f29565_chiles_rellenos-3000x2000.jpg&ehk=njcRLA8f2ybGTctO2dwRzGN7zoBWawYW3quO6G6L2Rg%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        name: "guacamole",
        image: "https://th.bing.com/th/id/R.ec7a86e2a6417b33514a4e13b3a7dc9a?rik=O0WUSb9ik9WXrg&pid=ImgRaw&r=0",
      },
    ],
  };


  const recipes = cuisines[cuisineType] || [];

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-[#58D68D]">{cuisineType} Cuisine</h1>

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




