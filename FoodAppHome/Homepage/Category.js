import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Myfooter from './Myfooter';
import './Category.css';

function Category() {
    return (
        <div className='category'>
            <h3>Welcome to our food Categories</h3>
            <div className='myContainer3'>
                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>KIDDIE MEALS</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>
                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>BREAKFAST COMBOS</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>PERFECTED DRINKS</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>BIG MEALS</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

            </div>

            <div className='myContainer3'>
                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>PASTA DELICACIES</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>
                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>DESSERTS</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>CRUNCHY BITE</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

                <div className="cards3">
                    <div className="image_box3">
                        <img src='http://flashugnews.com/wp-content/uploads/2022/07/pexels-pixabay-434258-edited-scaled.jpg' alt='my' />
                    </div>
                    <div className="details3">
                        <p>LIQUOR LAND</p>
                        <Link to="/FoodCart"><button type='submit' className="btn3" >View Food items</button></Link>


                    </div>

                </div>

            </div>
            <div><Myfooter/></div>
            <Outlet />

        </div>
    )
}

export { Category }