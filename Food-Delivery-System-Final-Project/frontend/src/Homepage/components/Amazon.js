import React from "react";
// import list from '../data';
import "../styles/amazon.css";
import Cards from "./Cards";
import Myfooter from "../Myfooter";



const Amazon = ({ handleClick}) => {
  return (
    <div>
      <section>
        <Cards handleClick={handleClick} />
      </section>

      <div>
        <Myfooter />
      </div>
    </div>
  );
};

export default Amazon;
