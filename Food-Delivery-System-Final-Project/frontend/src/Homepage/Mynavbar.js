import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="myNav">
        <div className="mylinks">
          <ul className="link">
            <div>
              <img
                src="logo-re.png"
                alt="Extreme logo"
                style={{ width: "15%", padding: "10px", marginTop: "4%" }}
              ></img>
            </div>

            <li>
              <Link to="/" className="one">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="one">
                MENU
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="one">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/LogIn" className="two">
                LOGIN
              </Link>
            </li>

          </ul>
        </div>
        <Outlet />

        {/* Footer */}
      </div>
    </div>
  );
};
export { Navbar };
