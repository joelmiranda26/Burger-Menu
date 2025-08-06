import React, { useState } from 'react';
import './Menu.css';

const maskURLs = {
  burgers: { url: 'https://i.imgur.com/vfDKN5k.png', steps: 20 },
  philly: { url: 'https://i.imgur.com/GkSV2nT.png', steps: 15 },
  wings: { url: 'https://i.imgur.com/UanRQcI.png', steps: 10 },
  tacos: { url: 'https://i.imgur.com/n5hN3WY.png', steps: 18 },
  nachos: { url: 'https://i.imgur.com/f89tz4p.png', steps: 16 },
};

const menuData = {
  burgers: [
  {
    name: "1. Single Cheese Burger",
    price: "$8.49",
    ingredients: "American Cheese, Lettuce, Tomato, Grilled Onion, Mayo, Mustard, Ketchup & Pickle",
    image: "1.singlecheese.jpg"
  },
  {
    name: "2. Double Cheese Burger",
    price: "$10.49",
    ingredients: "American Cheese, Lettuce, Tomato, Grilled Onion, Mayo, Mustard, Ketchup & Pickle",
    image: "/images/2.doublecheese.jpg"
  },
  {
    name: "3. Single Turkey Burger",
    price: "$8.99",
    ingredients: "Swizz Cheese, Lettuce, Tomato & Mayo",
    image: "/images/3.single turkey.avif"
  },
  {
    name: "4. Double Turkey Burger",
    price: "$10.99",
    ingredients: "Swizz Cheese, Lettuce, Tomato & Mayo",
    image: "/images/4.double swizz.jpg"
  },
  {
    name: "5. Gyro Burger",
    price: "$9.99",
    ingredients: "American Cheese, Lettuce, Tomato, Raw Onion, Gyro Sauce, Mustard, Ketchup & Pickle",
    image: "/images/5.Gyro.webp"
  },
  {
    name: "6. Godfather Burger",
    price: "$11.49",
    ingredients: "Hot/Mild Peppers, American Cheese & Nacho Cheese",
    image: "/images/6.GodFather.jpg"
  },
  {
    name: "7. Double Mushroom Burger",
    price: "$10.99",
    ingredients: "Swiss Cheese, Lettuce, Tomato, Grilled Onions & Ranch Sauce",
    image: "/images/7.mushroom.png"
  },
  {
    name: "8. Double Jalapeño Burger",
    price: "$11.49",
    ingredients: "jalapeños, pepper jack cheese, spicy mayo, Lettuce & Tomato",
    image: "/images/8.Jalapeno.jpg"
  },
  {
    name: "9. Grilled/Fried Chicken Sandwich",
    price: "$8.99",
    ingredients: "American Cheese, Lettuce, Tomato & Mayo",
    image: "/images/9.grilled.png"
  },
  {
    name: "10. Nashville Chicken Sandwich",
    price: "$9.99",
    ingredients: "Spicy Fried Chicken, Pickles & Coleslaw",
    image: "/images/10.nash.webp"
  },
  ],
  philly: [
    {
    name: "11. Steak Philly",
    price: "$9.99",
    ingredients: "Lettuce, Tomato, Bell peppers, onions, Mayo & Swizz Cheese",
    image: "/images/SteakPhilly.avif"
  },
    {
    name: "12. Chicken Philly",
    price: "$9.99",
    ingredients: "Lettuce, Tomato, Bell peppers, onions, Mayo & Swizz Cheese",
    image: "/images/ChikenPhilly.jpg"
  },
  {
    name: "13. Crispy Steak/Chicken Philly",
    price: "$9.99",
    ingredients: "Bell peppers, onions, Mayo & Swizz Cheese",
    image: "/images/CrispySteak.jpg"
  },
  // {
  //   name: "14. Crispy Chicken Philly",
  //   price: "$9.99",
  //   ingredients: "Bell peppers, onions, Mayo & Swizz Cheese",
  //   image: "https://i.imgur.com/w1n9Xkf.png"
  // },
  {
    name: "14. Buffelo Chicken Philly",
    price: "$9.99",
    ingredients: "Buffelo Sauce Mixed with Chicken, Lettuce, Tomato, Bell peppers, onions, Mayo & Swizz Cheese",
    image: "https://i.imgur.com/w1n9Xkf.png"
  },
  {
    name: "15. Turkey Philly",
    price: "$9.99",
    ingredients: "Lettuce, Tomato, Bell peppers, onions, Mayo & Swizz Cheese",
    image: "https://i.imgur.com/w1n9Xkf.png"
  },
  {
    name: "16. Gyro Philly",
    price: "$9.99",
    ingredients: "Lettuce, Tomato, Bell peppers, onions, Mayo & Swizz Cheese",
    image: "/images/GyroPhilly.jpg"
  },
  {
    name: "17. Gyro Sandwich",
    price: "$9.99",
    ingredients: "Onion, Tomato, Gyro Sauce",
    image: "/images/Gyrosandwich.avif"
  },
  {
    name: "18. Italian Beef",
    price: "$9.99",
    ingredients: "Add Hot/Mild Peppers[$0.35], Add Cheese[$0.69]",
    image: "/images/ItalianBeef.avif"
  },
  {
    name: "19. Chiken Po-Boy",
    price: "$9.99",
    ingredients: "Lettuce, Tomato & Mayo",
    image: "/images/ChickenPo-boy.jpg"
  },
  {
    name: "19. Fish Po-Boy",
    price: "$9.99",
    ingredients: "Lettuce, Tomato & Mayo",
    image: "/images/Fish.avif"
  },
  ],
  wings: [
    {
      name: "Buffalo Wings",
      price: "$6.99",
      ingredients: "Spicy wings with ranch",
      image: "https://i.imgur.com/Lr6JQBr.png"
    },
  ],
  tacos: [
    {
      name: "Chicken Tacos",
      price: "$5.99",
      ingredients: "Grilled chicken, salsa, lettuce",
      image: "https://i.imgur.com/n6bWhGf.png"
    },
  ],
  nachos: [
    {
      name: "Loaded Nachos",
      price: "$7.49",
      ingredients: "Cheese, jalapenos, sour cream",
      image: "https://i.imgur.com/akzYWwM.png"
    },
  ]
};


const Menu = () => {
  const [active, setActive] = useState('burgers');

  return (
    <div className="menu-container">
      {/* Category Tabs */}
      <div className="menu-buttons">
  {Object.keys(menuData).map((category, index) => (
    <button
      key={index}
      className={`menu-button ${active === category ? 'active' : ''}`}
      onClick={() => setActive(category)}
      style={{
        WebkitMaskImage: `url(${maskURLs[category].url})`,
        maskImage: `url(${maskURLs[category].url})`,
        WebkitMaskSize: `${maskURLs[category].steps * 100}% 100%`,
        maskSize: `${maskURLs[category].steps * 100}% 100%`,
        WebkitAnimation: `ani2 0.7s steps(${maskURLs[category].steps}) forwards`,
        animation: `ani2 0.7s steps(${maskURLs[category].steps}) forwards`,
      }}
    >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Item Cards */}
      <div className="menu-items">
        {menuData[active].map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p>{item.ingredients}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;