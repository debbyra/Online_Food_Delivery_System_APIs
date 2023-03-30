import React from 'react';
import './App.css';
import { Home } from './Homepage/Home';
import { Navbar } from './Homepage/Mynavbar';
import { Menu } from './Homepage/Menu';
import { Category } from './Homepage/Category';
import  LogIn  from './Homepage/LogIn';
import Admin from './Homepage/Admin';
import Register  from './Homepage/Register';
import FoodCart from './FoodCart';
import Myfooter from './Homepage/Myfooter';




import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path='/Category' element={<Category/>}/>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/FoodCart" element={<FoodCart />} />
          <Route path="/" element={<Myfooter/>}/>
          <Route path='/Admin' element={<Admin/>}/>
 
        </Route>
      </Routes>
      
    </BrowserRouter>



  )
}

export default App;
