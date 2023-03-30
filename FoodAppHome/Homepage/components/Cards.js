import React from 'react';
import '../styles/cards.css';


const Cards = ({item, handleClick}) => {
    const {name, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt='my'/>
        </div> 
        <div className="details">
            <p >{name}</p>
            <p>Price - {price}UGX</p>
            <button onClick={()=>handleClick(item)} className="btn" >Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Cards