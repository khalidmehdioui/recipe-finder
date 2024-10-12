import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { name } = useParams();

  const recipeName = name.replace(/-/g, ' ');

  const recipeData = {
    "Seafood fideuà": {
      title: "Seafood fideuà",
      image: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
      ingredients: ["400g Mussels","8 Prawns2 pinches Saffron","350g Vermicelli","5 tblsp Olive Oil","1 large Onions","3 cloves Garlic","2 tbs Paprika","1 tail Monkfish","4 Baby Squid","650ml Fish Stock","2 large Tomatoes","Juice of 1 Lemon","Topping Parsley"],
      directions: "Boil the kettle.
Empty the mussels into a colander and run under cold water.
Throw away any with broken shells.
Pick through the shells, tapping each one on the side of the sink – they should be closed or should slowly close when tapped – if they stay open, throw them away.
If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well.
Keep in the colander, covered with a cold, damp cloth, until you’re ready to cook.
Peel the prawn shells on the body section only – leave the heads and tails intact.
Score down the backs and pull out any gritty entrails.
Chill until you’re ready to cook.
Put the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins.
If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands.
Heat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan.
Add the onion and stir around the pan for 5 mins until soft.
Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown.
Stir in the paprika.
Keeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well.
Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top.
Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil).
Turn the heat to medium and cook for 6 mins.
Uncover and stir to incorporate the dry top layer of pasta.
Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up.
Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through.
Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together).
Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top.
Scatter with parsley before serving.
"
    
    },
    "Spanish Tortilla": {
      title: "Spanish Tortilla",
      image: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
      ingredients: ["
1 sliced Onion

4 tbsp Olive Oil

25g Butter

400g Potatoes

6 cloves Garlic

8 Eggs

Handful Parsley

1 Baguette

4 Vine Tomatoes

drizzle Olive Oil"],
      directions: "Put a large non-stick frying pan on a low heat.
Cook the onion slowly in the oil and butter until soft but not brown – this should take about 15 mins.
Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly.
When the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs.
Put the lid back on the pan and leave the tortilla to cook gently.
After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly.
To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking.
Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley.
To accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil."
    },
    "Roast fennel and aubergine paella": {
      title: "Roast fennel and aubergine paella",
      image: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
      ingredients: ["
6 small Baby Aubergine

4 small Fennel

1 thinly sliced Red Pepper

1 medium Courgettes

1 finely chopped Onion

300g Paella Rice

1 tsp Paprika

pinch Saffron

200ml White Wine

700ml Vegetable Stock

100g Frozen Peas

1 chopped Lemon

Handful Parsley

pinch Salt

pinch Black Pepper
"],
      directions: "1 Put the fennel, aubergine, pepper and courgette in a roasting tray.
Add a glug of olive oil, season with salt and pepper and toss around to coat the veggies in the oil.
Roast in the oven for 20 minutes, turning a couple of times until the veg are pretty much cooked through and turning golden.
2 Meanwhile, heat a paella pan or large frying pan over a low– medium heat and add a glug of olive oil.
Sauté the onion for 8–10 minutes until softened.
Increase the heat to medium and stir in the rice, paprika and saffron.
Cook for around 1 minute to start toasting the rice, then add the white wine.
Reduce by about half before stirring in two-thirds of the stock.
Reduce to a simmer and cook for 10 minutes without a lid, stirring a couple of times.
3 Stir in the peas, add some seasoning, then gently mix in the roasted veg.
Pour over the remaining stock, arrange the lemon wedges on top and cover with a lid or some aluminium foil.
Cook for a further 10 minutes.
4 To ensure you get the classic layer of toasted rice at the bottom of the pan, increase the heat to high until you hear a slight crackle.
Remove from the heat and sit for 5 minutes before sprinkling over the parsley and serving.
"
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
    "Pad See Ew": {
      title: "Pad See Ew",
      image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
      ingredients: ["
6oz/180g rice stick noodles

2 tbsp dark soy sauce

2 tbsp oyster sauce

2 tsp soy sauce

2 tsp white vinegar

2 tsp sugar

2 tbsp water

2 tbsp peanut oil

2 cloves garlic

1 cup Chicken

1 Egg

4 cups Chinese broccoli

"],
      directions: "Mix Sauce in small bowl.
Mince garlic into wok with oil.
Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden.
Push to the side of the wok, crack egg in and scramble.
Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour.
Add noodles, Chinese broccoli leaves and sauce.
Gently mix together until the noodles are stained dark and leaves are wilted.
Serve immediately!"
    },
    "Thai Green Curry": {
      title: "Thai Green Curry",
      image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
      ingredients: ["
225g new potatoes

100g green beans

1 tbsp sunflower oil

1 clove garlic

4 tsp Thai green curry paste

400ml coconut milk

2 tsp Thai fish sauce

1 tsp Sugar

450g boneless Chicken

2 fresh kaffir leaves lime

handfull basil

Boiled Rice

"],
      directions: "Put the potatoes in a pan of boiling water and cook for 5 minutes.
Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft.
Drain and put to one side.
In a wok or large frying pan, heat the oil until very hot, then drop in the garlic and cook until golden, this should take only a few seconds.
Don’t let it go very dark or it will spoil the taste.
Spoon in the curry paste and stir it around for a few seconds to begin to cook the spices and release all the flavours.
Next, pour in the coconut milk and let it come to a bubble.
Stir in the fish sauce and sugar, then the pieces of chicken.
Turn the heat down to a simmer and cook, covered, for about 8 minutes until the chicken is cooked.
Tip in the potatoes and beans and let them warm through in the hot coconut milk, then add a lovely citrussy flavour by stirring in the shredded lime leaves (or lime zest).
The basil leaves go in next, but only leave them briefly on the heat or they will quickly lose their brightness.
Scatter with the lime garnish and serve immediately with boiled rice."
     
    },
    "Massaman Beef curry": {
      title: "Massaman Beef curry",
      image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
      ingredients: ["
85g Peanuts

400ml can Coconut cream

4 tbsp Massaman curry paste

600g stewing cut into strips Beef

450g waxy Potatoes

1 cut thin wedges Onion

4 leaves Lime

1 Cinnamon stick

1 tbsp Tamarind paste

1 tbsp palm or soft light Brown sugar

1 tbsp Fish Sauce

1 red deseeded and finely sliced, to serve chilli

to serve Jasmine Rice"],
      directions: "Heat oven to 200C/180C fan/gas 6, then roast the peanuts on a baking tray for 5 mins until golden brown.
When cool enough to handle, roughly chop.
Reduce oven to 180C/160C fan/gas 4.
Heat 2 tbsp coconut cream in a large casserole dish with a lid.
Add the curry paste and fry for 1 min, then stir in the beef and fry until well coated and sealed.
Stir in the rest of the coconut with half a can of water, the potatoes, onion, lime leaves, cinnamon, tamarind, sugar, fish sauce and most of the peanuts.
Bring to a simmer, then cover and cook for 2 hrs in the oven until the beef is tender.
Sprinkle with sliced chilli and the remaining peanuts, then serve straight from the dish with jasmine rice."
    }
  };

  const recipe = recipeData[recipeName];

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#008B8B] mb-4">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 md:max-w-xs mb-4 md:mb-0">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-[#008B8B] mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[#008B8B] mb-2">Directions</h2>
          <p className="mb-4">{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
