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
        {/* Spanish Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Spanish" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Spanish Cuisine
            </Link>
            <img 
              src="https://th.bing.com/th/id/OIP.qoglt67ZTjeA-pHZzoC5NwAAAA?rs=1&pid=ImgDetMain" 
              alt="Spanish Cuisine" 
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

        {/* Thaïlande Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link 
              to="/cuisine/Thaïlande" 
              className="bg-primary text-white py-2 w-full text-lg rounded-lg hover:bg-secondary"
            >
              Thaïlande Cuisine
            </Link>
            <img 
              src="https://img.ev.mu/images/attractions/5627/1605x642/2443.jpg" 
              alt="Thaïlande Cuisine" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
