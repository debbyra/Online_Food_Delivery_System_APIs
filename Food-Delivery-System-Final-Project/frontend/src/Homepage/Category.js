import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import Myfooter from "./Myfooter";
import { Navbar } from "./Mynavbar";
import "./Category.css";

function Category() {
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/subcategories/",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = response.data.subcategories;
        setSubs(data);
        localStorage.setItem("mySubcategories", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubcategories();
  }, []);
  console.log("My subcategories", subs);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="category">
        <h3>Welcome to our food Categories</h3>
        <div className="myContainer3">
          {subs.map((subcategory) => {
            return (
              <div className="image_box3">
                <div className="cards3">
                  <div>
                    <img src={subcategory.image} alt="img" />
                    <div className="details3">
                      <p>{subcategory.name}</p>
                      <Link to="/FoodCart">
                        <button type="submit" className="btn3">
                          View Food items
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <Myfooter />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export { Category };
