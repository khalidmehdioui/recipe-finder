import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-8 text-center">
     
      <h2 className="text-2xl font-bold text-center mb-4 text-dark">
        Welcome to Recipe Finder
      </h2>
      <h2 className="text-3xl font-bold mb-6">Explore Recipes by Cuisine</h2>
      
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Maroccan Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Maroccan" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Moroccan Cuisine
            </Link>
            <img 
              src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6519441/1820/1213/m1/fpnw/wm1/bjohyk4ttcq3xvf8mkuqn31cnrexp1phtpzm1gyvdfd7vzy3ajhcdula0mqz3ump-.jpg?1560243082&s=2b49460455eebc952148c40f15cb4fb7" 
              alt="Moroccan Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Italian Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Italian" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Italian Cuisine
            </Link>
            <img 
              src="https://i.pinimg.com/564x/df/06/5e/df065eb6e8c4d19597e3b5d71f940f22.jpg" 
              alt="Italian Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mexican Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Mexican" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Mexican Cuisine
            </Link>
            <img 
              src="https://www.rentbyhost.com/files/blog/202109201832446148d3cc4df40.jpg" 
              alt="Mexican Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
