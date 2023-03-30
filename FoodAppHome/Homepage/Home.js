import React from 'react';
import { useState, useEffect } from 'react';
import Myfooter from './Myfooter';
import { Outlet, Link } from "react-router-dom";



const Images = ['dish2.jpg','fruit.jpg','cake.jpg'];



function Home() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(Images[Math.floor(Math.random() * Images.length)]);
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])
    // making our images to be in motion



    
    return (



        <div className='body'>
            <div className='Header'>
                <div className='sec2'>
                    <h2>Welcome to Extreme Cafe</h2>
                    <div>
                    <Link to="/LogIn"><button type='submit' className='btn'>START ORDER </button></Link>

                    </div>
                    

                </div>
                <div className='sec1'>

                    <img className='img' src={currentImage} alt='tttttt' />


                </div>

            </div>
            <div className='order'>
                <div className='sec1'>
                    <img src='dish1.png' alt='bbb' style={{ width: "80%", height: "100%" }}></img>
                    <div className='word'><h3>For the most delicious local and international meals</h3></div>

                </div>
                <div className='sec1'>
                    <img src='dish2.png' alt='bbb' style={{ width: "80%", height: "100%" }}></img>
                    <div className='word'><h3>We're commited to great food, great coffee, great service, an experience that will make your time with us fabulous.</h3></div>

                </div>

            </div>
            <div><Myfooter/></div>
            <Outlet/>


        </div>




    )
}

export { Home };