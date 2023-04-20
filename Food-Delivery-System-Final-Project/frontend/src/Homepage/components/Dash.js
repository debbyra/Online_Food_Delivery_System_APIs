import "../styles/dash.css";
import { Navbar } from "../Mynavbar";
// import { GrCart } from "react-icons/gr";

const Dash = ({ size, setShow }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            Extreme Cafe food items
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <button><img
                  src="cart.png"
                  alt="cart"
                  style={{ width: "60%", height: "70%" }}
                ></img></button>
              {/* <GrCart /> */}
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dash;
