import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Myfooter from "./Myfooter";
import { Navbar } from "./Mynavbar";
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/categories/", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = response.data.categories;
        setMenu(data);
        localStorage.setItem("my Menu Items", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenu();
  }, []);
  console.log("My menu", menu);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="menu">
        <h3>Welcome to our Menu</h3>
        <div className="myContainer1">
          {menu?.map((anItem) => (
            <div className="cards2">
              <div className="image_box2">
                <img src={anItem.image} alt="my" />
              </div>
              <div className="details2">
                <p>{anItem.name}</p>
                <Link to="/Category">
                  <button type="submit" className="btn2">
                    View FoodCategories
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Myfooter />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export { Menu };
