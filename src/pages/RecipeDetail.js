import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { name } = useParams();

  const recipeName = name.replace(/-/g, ' ');

  const recipeData = {
    "Tajin": {
      title: "Tajin",
      image: "https://th.bing.com/th/id/R.6b1e194d390dc23aca7f86a392214b10?rik=tZCYKhL57xKI0w&pid=ImgRaw&r=0",
      ingredients: ["Lamb or beef", "Dried prunes", "Dried apricots", "Blanched almonds", "Onion, chopped", "Garlic, minced", "Saffron or turmeric", "Cinnamon", "Salt and pepper", "Olive oil", "Meat broth or water"],
      directions: " Prepare Ingredients: Soak the prunes and apricots in water for about 30 minutes, then drain. Heat Oil: In a tagine or pot, heat olive oil over medium heat. Brown the Meat: Add the meat pieces and brown them on all sides. Add Onion and Garlic: Add the chopped onion and minced garlic, sautéing until the onion is translucent. Season: Stir in saffron or turmeric, cinnamon, salt, and pepper. Add Liquid: Pour in the meat broth or water until the meat is covered. Bring to a boil. Cook the Meat: Cover the tagine and reduce the heat to low. Let it simmer for about 1.5 to 2 hours until the meat is tender. Add Fruits: After the cooking time, add the prunes, apricots, and almonds. Let it cook for another 20 minutes. Serve: Serve hot with bread or couscous."
    
    },
    "Pastilla": {
      title: "Pastilla",
      image: "https://thumbs.dreamstime.com/b/fresh-baked-moroccan-fish-pastilla-close-up-239501736.jpg",
      ingredients: ["Chicken (or pigeon)","Chopped onion","Fried and ground almonds", "Eggs", "Saffron", "Cinnamon", "Salt and pepper", "Bastilla pastry (or filo dough)", "Powdered sugar (for garnish)", "Olive oil or butter"],
      directions: " Prepare the Chicken: Cook the chicken with onions and spices (saffron, cinnamon, salt, pepper) in water until tender. Remove the chicken and strain the broth. Shred the Chicken: Once cooled, debone and shred the chicken into small pieces. Prepare the Filling: In a pan, mix the shredded chicken with ground almonds and beaten eggs. Cook on low heat until the eggs are set. Prepare the Pastry: Brush the bastilla pastry with butter. Assemble the Bastilla: Layer the pastry, add the filling, then cover with another layer of pastry. Repeat as needed. Bake: Place the bastilla in a baking dish, brush with butter, and bake in a preheated oven until golden brown. Serve: Dust with powdered sugar and cinnamon before serving."
    },
    "Couscous": {
      title: "Couscous",
      image: "https://i.pinimg.com/originals/4c/53/56/4c5356b715ae1a13cc815888e0244ef6.jpg",
      ingredients: ["Couscous (about 500 g)", "Vegetables (such as carrots, zucchini, bell peppers, and peas)", "Meat (chicken or lamb)", "Chopped onion", "Olive oil", "Spices (cumin, coriander, cinnamon, salt, and pepper)", "Broth (water or meat broth)"],
      directions: " Prepare the Vegetables: Cut the vegetables into small cubes. Heat Oil: In a pot, heat olive oil and sauté the chopped onion until translucent. Add Meat: Add the meat pieces and brown them on all sides. Season: Stir in the spices and broth, then bring to a boil. Add Vegetables: Once boiling, add the vegetables and let it simmer on low heat until everything is tender. Prepare the Couscous: In a bowl, place the couscous and cover it with hot water. Let it sit for about 10 minutes. Steam the Couscous: Place the couscous in a steamer for about 10-15 minutes until cooked through. Serve: Serve the couscous on a plate with the meat and vegetables on top."
    },
    "Spaghetti alla Carbonara": {
      title: "Spaghetti alla Carbonara",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Pepper"],
      directions: "Boil water in a large saucepan and season with salt. Cook 350g spaghetti for 10 minutes until al dente. Meanwhile, fry finely chopped 100g pancetta and 2 bruised garlic cloves in melted butter until golden. In a bowl, beat 3 large eggs and mix with grated 50g pecorino and 50g parmesan cheese. Once the spaghetti is cooked, combine it with the pancetta in the frying pan, remove the garlic, and quickly stir in the egg and cheese mixture off the heat, adding pasta water to keep it moist. Serve immediately, topped with remaining cheese and black pepper."
    },
    "Lasagne": {
      title: "Lasagne",
      image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
      ingredients: ["Lasagne Noodles", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella Cheese", "Parmesan Cheese"],
      directions: "Heat oil in a large saucepan and add chopped bacon, cooking until golden. Add diced onion, celery, and carrot, cooking for 5 minutes until softened. Stir in minced garlic, then add mince, breaking it up as it browns for about 6 minutes. Mix in tomato purée and cook for 1 minute, then add chopped tomatoes and water to rinse the cans. Stir in honey and season to taste, simmering for 20 minutes. Preheat the oven to 200°C (180°C fan/gas 6). To assemble the lasagne, layer ragu sauce, lasagne sheets, and more sauce in a roasting tin, finishing with pasta. Mix crème fraîche with water, pour over the top, and add mozzarella and Parmesan. Bake for 25-30 minutes until golden, serving with basil if desired."
    },
    "Pizza Express Margherita": {
      title: "Pizza Express Margherita",
      image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil"],
      directions: "Preheat the oven to 230°C. Dissolve sugar and crumble fresh yeast into warm water, letting it stand for 10-15 minutes in a warm spot until frothy. Sift flour and salt into a bowl, creating a well in the center, and add the yeast mixture and olive oil. Lightly flour your hands and mix the ingredients until combined. Dust your surface with flour and knead the dough for 10 minutes until smooth and silky. Place the dough in a lightly oiled baking tray. Spread passata on top, add mozzarella (or other cheese), season with oregano and black pepper, and drizzle with olive oil. Bake for 10-12 minutes until the cheese is slightly colored, then top with basil leaves and enjoy!"
    },
    "Tacos": {
      title: "Tacos",
      image: "https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg",
      ingredients: ["Corn or flour tortillas", "Ground beef, chicken, or pork", "Taco seasoning (or spices: cumin, chili powder, garlic powder, onion powder)", "Chopped onions", "Chopped tomatoes", "Shredded lettuce", "Shredded cheese (cheddar or queso fresco)", "Sour cream", "Salsa", "Jalapeños (optional)", "Avocado or guacamole (optional)"],
      directions: "1. Cook the Meat: In a skillet, brown the ground meat over medium heat. Drain excess fat. 2. Season the Meat: Add taco seasoning and a splash of water. Stir and simmer for a few minutes until well mixed. 3. Warm the Tortillas: Heat the tortillas in a skillet or microwave until warm and pliable. 4. Assemble the Tacos: Place a portion of the cooked meat in each tortilla. Top with chopped onions, tomatoes, shredded lettuce, and cheese. 5. Add Toppings: Finish with sour cream, salsa, jalapeños, and avocado or guacamole if desired. 6. Serve: Serve immediately and enjoy!"
    },
    "chile relleno": {
      title: "chile relleno",
      image: "https://th.bing.com/th/id/R.da960f9ac204694e839ec6d59909844e?rik=3qOLd07U3TKgdA&riu=http%3a%2f%2fwww.chowstatic.com%2fassets%2f2014%2f09%2f29565_chiles_rellenos-3000x2000.jpg&ehk=njcRLA8f2ybGTctO2dwRzGN7zoBWawYW3quO6G6L2Rg%3d&risl=&pid=ImgRaw&r=0",
      ingredients: ["4 large poblano peppers", "1 cup shredded cheese (like Monterey Jack or Chihuahua)", "2 eggs (separated)", "1/2 cup flour", "1 cup tomato sauce (for serving)", "Salt and pepper, to taste", "Oil (for frying)"],
      directions: "1. Roast the Peppers: Preheat the oven to 400°F (200°C). Place the poblano peppers on a baking sheet and roast until the skins are blistered and charred. Remove and let them cool, then peel off the skins and remove the seeds. 2. Stuff the Peppers: Carefully stuff each pepper with shredded cheese. 3. Prepare the Batter: In a bowl, beat the egg whites until stiff peaks form. In another bowl, beat the egg yolks with a pinch of salt and pepper. Gently fold the yolks into the whites. 4. Coat the Peppers: Dust the stuffed peppers lightly with flour, then dip them into the egg batter. 5. Fry the Peppers: Heat oil in a skillet over medium heat. Carefully place the battered peppers in the skillet and fry until golden brown on all sides. Remove and drain on paper towels. 6. Serve: Serve the chile rellenos hot, topped with warm tomato sauce."
     
    },
    "guacamole": {
      title: "guacamole",
      image: "https://th.bing.com/th/id/R.ec7a86e2a6417b33514a4e13b3a7dc9a?rik=O0WUSb9ik9WXrg&pid=ImgRaw&r=0",
      ingredients: ["2 ripe avocados", "1 small onion, finely chopped", "1-2 tomatoes, diced", "1 lime, juiced", "1-2 cloves garlic, minced", "Salt, to taste", "Fresh cilantro (optional), chopped", "Jalapeño (optional), minced for heat"],
      directions: "1. Prepare the Avocados: Cut the avocados in half, remove the pit, and scoop the flesh into a bowl. 2. Mash the Avocados: Using a fork or a potato masher, mash the avocados to your desired level of smoothness. 3. Add Ingredients: Stir in the chopped onion, diced tomatoes, lime juice, minced garlic, and salt. Add cilantro and jalapeño if using. 4. Mix Well: Combine all ingredients until well mixed. Adjust seasoning to taste. 5. Serve: Serve immediately with tortilla chips or as a topping for tacos and other dishes."
    }
  };

  const recipe = recipeData[recipeName];

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#6B705C] mb-4">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 md:max-w-xs mb-4 md:mb-0">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-[#6B705C] mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[#6B705C] mb-2">Directions</h2>
          <p className="mb-4">{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;