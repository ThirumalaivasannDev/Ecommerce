import { HomePage } from './Pages/home/HomePage';
import { Routes, Route } from 'react-router';
import { Checkout } from './Pages/checkout/Checkout';
import { Order } from './Pages/Order';
import { Tracking } from './Pages/Tracking';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

export function App() {


  const[cart,setCart]=useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').then((response)=>
  {
    setCart(response.data);
  }
  );
  },[]);

  return (
    <Routes>
      <Route path="/" element={< HomePage cart={cart} />} />
      <Route path="/checkout" element={< Checkout cart={cart} />} />
      <Route path="/order" element={< Order  cart={ cart } /> } />
      <Route path="/tracking" element={ <Tracking /> } />
    </Routes>
  )
}


