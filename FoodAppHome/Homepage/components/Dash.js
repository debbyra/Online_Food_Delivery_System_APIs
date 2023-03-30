import React from 'react';
import '../styles/dash.css';
// import { GrCart } from "react-icons/gr";


const Dash = ({ size, setShow }) => {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            Extreme Cafe food items
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <button>View Cart</button>
              {/* <GrCart /> */}
            </span>
            <span>{size}</span>
          </div>
        </div>

      </nav>
      

    </div>

  )
}

export default Dash