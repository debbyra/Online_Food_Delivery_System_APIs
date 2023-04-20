import React from "react";
import "./aboutus.css";
import Myfooter from "./Myfooter";
import { Navbar } from "./Mynavbar";

function About() {
  return (
    <div className="about">
      <div>
        <Navbar />
      </div>
      <div className="aboutus">
        <h3>ABOUT US</h3>
        <h3>OUR BRANCHES</h3>
        <hr></hr>
        <br></br>
        <p>
          Welcome to Extreme Cafe, is a full-service, quick-casual restaurant
          specialized in delivering a relaxed and memorable dining experience.
          We’re currently in 12 locations; 8 in Kampala, 1 in Entebbe and 3 in
          Nairobi. Whether in Kampala or Entebbe, you're always close to a Extreme Cafe,
          thanks to our growing network.You're welcome to drop by or call
          to make your order and we'll be more than happy to serve you. Each
          location features a unique ambience with tasteful décor, specially
          designed for your comfort. To make you feel more at home, we’ve
          carefully selected a unique theme for each location. We have over 300
          carefully selected, mouthwatering menu items. Whatever your taste,
          it’s well catered for. We value you. That’s why you’ll always be
          served with excellence by each member of our highly skilled team
          members. Eager to serve you, our experienced wait staff greet you at
          the door and lead you to the table of your choice in the well thought
          out seating arrangement. The rich aroma of freshly ground coffee is
          the handiwork of our skilled baristas, adept in latte art. This
          ensures you get a freshly prepared cup of coffee as the beans are
          roasted on site. To ensure you always enjoy a special dining
          experience, we constantly improve our signature world-class
          innovations. We’re growing and may soon open a location closer to you.
          We look forward to serving you, You’re more than welcome to Find us
          here. Extreme Cafe is part of PASHA Group of companies, the parent
          company to Extreme Cafe, PASHA Tyres, PASHA Oil, PASHA Designs.
        </p>
        <br></br>

        <p>
          
          <b>MINIMUM DELIVERY FEE</b> <br></br>0 <br></br><b>MINIMUM ORDER</b> <br></br>UGX
          15000 <br></br><b>OPENING HOURS </b><br></br>Sunday - Thursday 6.30 AM to
          11:00 PM<br></br>
          Friday - Saturday 6.30 AM to 12:00 AM
        </p>
      </div>
      <div>
        <Myfooter />
      </div>
    </div>
  );
}
export { About };
