import React from "react";
import "../styles/cards.css";
import { useEffect, useState } from "react";
import axios from "axios"; 

const Cards = ({ handleClick}) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/fooditems/", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = response.data.fooditems;
        setCart(data);
        localStorage.setItem("myCartItems", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchFoodItems();
  }, []);
  console.log("My cart items", cart);

  
  return (
    <div className="myContainer4">
      {cart?.map((anItem) => (
        <div className="cards">
          <div className="image_box">
            <img src={anItem.image} alt="my" />
          </div>
          <div className="details">
            <p>{anItem.name}</p>
            <p>Price - UGX {anItem.price}</p>
            <button onClick={() => handleClick(anItem)} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

// const Cards = ({item, handleClick}) => {
//     const {name, price, img} = item;
// return (
//   <div className="cards">
//       <div className="image_box">
//           <img src={img} alt='my'/>
//       </div>
//       <div className="details">
//           <p >{name}</p>
//           <p>Price - {price}UGX</p>
//           <button onClick={()=>handleClick(item)} className="btn" >Add to Cart</button>
//       </div>

//   </div>
// )
// }
