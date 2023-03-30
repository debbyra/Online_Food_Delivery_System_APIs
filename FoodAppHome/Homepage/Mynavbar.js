import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {


    return (
        <div className='nav'>
            <>
                <nav >
                    <div className='myNav'>
                        <div className='mylinks'>
                            <ul className='link'>
                                <div>
                                    <img src='logo-re.png' alt='Extreme logo' style={{ width: "15%", padding: "10px", marginTop:"4%" }} ></img>
                                </div>

                                <li><Link to="/" className='one'>HOME</Link></li>
                                <li><Link to="/Menu" className='one'>MENU</Link></li>
                                <li><Link to="/LogIn" className='two'>LOGIN</Link></li>
                                

                                <li><Link to="/Register" className='two'>REGISTER</Link></li>
                                <li><Link to="/FoodCart"><img src='cart.png' alt='cart' style={{  width: "60%", height: "70%" }}></img></Link></li>
                            </ul>

                        </div>


                        {/* Footer */}


                    </div>


                </nav>
                <Outlet />
            </>
        </div>
    )
}
export { Navbar }