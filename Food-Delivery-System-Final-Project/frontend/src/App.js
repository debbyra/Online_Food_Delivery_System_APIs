import React from "react";
import "./App.css";
import { Home } from "./Homepage/Home";
import { Navbar } from "./Homepage/Mynavbar";
import { Menu } from "./Homepage/Menu";
import { Category } from "./Homepage/Category";
import { About } from "./Homepage/aboutus";
import LogIn from "./Homepage/LogIn";
import Admin from "./Homepage/Admin";
import Register from "./Homepage/Register";
import FoodCart from "./FoodCart";
import Myfooter from "./Homepage/Myfooter";
import { Route, Routes } from "react-router-dom";
import Dash from "./dashboard/dashboardapp";
import MainDash from "./dashboard/scenes/global/dash";
import Bar from "./dashboard/scenes/bar";
import Calendar from "./dashboard/scenes/calendar/calendar";
import Categories from "./dashboard/scenes/categories";
import Contacts from "./dashboard/scenes/contacts";
import Dashboard from "./dashboard/scenes/dashboard";
import FAQ from "./dashboard/scenes/faq";
import FoodItems from "./dashboard/scenes/fooditems";
import Form from "./dashboard/scenes/form";
import Geography from "./dashboard/scenes/geography";
import Line from "./dashboard/scenes/line";
import Orders from "./dashboard/scenes/orders";
import Pie from "./dashboard/scenes/pie";
import Reviews from "./dashboard/scenes/reviews";
import Team from "./dashboard/scenes/team";

function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route index element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/FoodCart" element={<FoodCart />} />
      <Route path="/maindash" element={<MainDash />} />
      <Route path="/" element={<Myfooter />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/fooditems" element={<FoodItems />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="/form" element={<Form />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/line" element={<Line />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
