import { HomePage } from './Pages/HomePage';
import { Routes, Route } from 'react-router';
import { Checkout } from './Pages/Checkout';
import { Order } from './Pages/Order';
import { Tracking } from './Pages/Tracking';
import './App.css';

export function App() {


  return (
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/checkout" element={< Checkout />} />
      <Route path="/order" element={< Order /> } />
      <Route path="/tracking" element={ <Tracking /> } />
    </Routes>
  )
}


