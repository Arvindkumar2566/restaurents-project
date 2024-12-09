import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './FifthAbout.css';

const FifthAbout = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');
  const navigate = useNavigate(); // Initialize useNavigate

  const menuItems = {
    Breakfast: [
      { name: 'Crispy Avocado Toast', description: 'Toasted sourdough with mashed avocado ', calories: '450 CAL', price: '$22' },
      { name: 'Classic Pancakes', description: 'Fluffy pancakes served with maple syrup', calories: '700 CAL', price: '$18' },
      { name: 'Omelette Supreme', description: 'Egg omelette with mushrooms, cheese, and spinach', calories: '550 CAL', price: '$20' },
      { name: 'Berry Smoothie Bowl', description: 'Mixed berries with yogurt and granola', calories: '350 CAL', price: '$16' },
      { name: 'Egg Benedict', description: 'Poached eggs on toasted English muffins', calories: '620 CAL', price: '$24' },
      { name: 'French Toast', description: 'Golden French toast topped with berries and syrup', calories: '650 CAL', price: '$20' },
    ],
    Lunch: [
      { name: 'Grilled Chicken Salad', description: 'Mixed greens with grilled chicken and vinaigrette', calories: '350 CAL', price: '$24' },
      { name: 'Veggie Wrap', description: 'Wrap with hummus, cucumbers, and roasted veggies', calories: '400 CAL', price: '$19' },
      { name: 'Chicken Caesar Wrap', description: 'Grilled chicken with romaine lettuce and Caesar dressing in a wrap', calories: '500 CAL', price: '$22' },
      { name: 'Fish Tacos', description: 'Tacos with grilled fish, cabbage slaw, and avocado', calories: '550 CAL', price: '$21' },
      { name: 'BLT Sandwich', description: 'Bacon, lettuce, and tomato on toasted bread', calories: '600 CAL', price: '$18' },
      { name: 'Turkey Club', description: 'Turkey, bacon, and avocado on a toasted sandwich', calories: '650 CAL', price: '$19' },
    ],
    Dinner: [
      { name: 'Seared Salmon', description: 'Salmon fillet with steamed vegetables', calories: '600 CAL', price: '$28' },
      { name: 'Steak and Potatoes', description: 'Grilled steak with mashed potatoes and green beans', calories: '800 CAL', price: '$32' },
      { name: 'Vegetarian Pasta', description: 'Pasta with seasonal vegetables and a creamy sauce', calories: '700 CAL', price: '$26' },
      { name: 'Lobster Tail', description: 'Grilled lobster tail with garlic butter and lemon', calories: '500 CAL', price: '$40' },
      { name: 'Chicken Parmesan', description: 'Breaded chicken cutlet with marinara sauce and melted cheese', calories: '750 CAL', price: '$30' },
      { name: 'Stuffed Peppers', description: 'Bell peppers stuffed with quinoa, vegetables, and cheese', calories: '400 CAL', price: '$22' },
    ],
    Dessert: [
      { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with molten center', calories: '400 CAL', price: '$10' },
      { name: 'Vanilla Bean Cheesecake', description: 'Classic cheesecake with vanilla bean and berry compote', calories: '500 CAL', price: '$12' },
      { name: 'Apple Crumble', description: 'Baked apples with cinnamon and a crunchy crumble topping', calories: '350 CAL', price: '$9' },
      { name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked layers and mascarpone', calories: '450 CAL', price: '$12' },
      { name: 'Lemon Sorbet', description: 'Refreshing lemon sorbet served in a chilled bowl', calories: '200 CAL', price: '$6' },
      { name: 'Creme Brulee', description: 'Creamy custard with a caramelized sugar top', calories: '500 CAL', price: '$14' },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNavigation = (item) => {
    navigate('/shop', { state: item });
  };

  return (
    <div className="fifth-about-container mx-5 px-5">
      <header className="fifth-about-header">
        <h1>Our Food Menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.</p>
      </header>

      <div className="fifth-about-tabs">
        {Object.keys(menuItems).map((tab) => (
          <button
            key={tab}
            className={`fifth-about-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="fifth-about-items">
        <div className="fifth-about-item-container">
          {menuItems[activeTab].slice(0, 3).map((item, index) => (
            <div className="fifth-about-item" key={index}>
              <div className="fifth-about-item-details" onClick={() => handleNavigation(item)}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.calories}<hr className='m-1'/></p>
              </div>
              <div className="fifth-about-item-price">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="fifth-about-item-container">
          {menuItems[activeTab].slice(3, 6).map((item, index) => (
            <div className="fifth-about-item" key={index}>
              <div className="fifth-about-item-details">
                <h3  onClick={() => handleNavigation(item)}>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.calories}<hr className='m-1'/></p>
              </div>
              <div className="fifth-about-item-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fifth-about-view-menu-btn">
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default FifthAbout;
