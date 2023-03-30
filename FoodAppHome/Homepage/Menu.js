import React from 'react';
import Myfooter from './Myfooter';
import { Outlet, Link } from "react-router-dom";

const Menu = () => {

  return (
    <div className='menu'>
      <h3>Welcome to our Menu</h3>
      <div className='myContainer1'>
        <div className="cards2">
          <div className="image_box2">
            <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
          </div>
          <div className="details2">
            <p>BIG ON BREAKFAST</p>
            <Link to="/Category"><button type='submit' className="btn2" >View FoodCategories</button></Link>
          </div>

        </div>

        <div className="cards2">
          <div className="image_box2">
            <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
          </div>
          <div className="details2">
            <p>GENEROUS BIG LUNCH</p>
            <Link to="/Category"><button type='submit' className="btn2" >View FoodCategories</button></Link>

           
          </div>

        </div>

      </div>

      <div className='myContainer1'>
        <div className="cards2">
          <div className="image_box2">
            <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
          </div>
          <div className="details2">
            <p>DINNNER</p>
            <Link to="/Category"><button type='submit' className="btn2" >View FoodCategories</button></Link>

           
          </div>

        </div>

        <div className="cards2">
          <div className="image_box2">
            <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
          </div>
          <div className="details2">
            <p>PERFECTED DRINKS</p>
            <Link to="/Category"><button type='submit' className="btn2" >View FoodCategories</button></Link>

            
          </div>

        </div>

      </div>
      <div><Myfooter/></div>
      <Outlet />


    </div>

  )
}

export { Menu }