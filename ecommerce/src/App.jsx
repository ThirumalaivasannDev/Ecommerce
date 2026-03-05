import { HomePage } from './Pages/HomePage';
import { Routes, Route } from 'react-router';
import { Checkout } from './Pages/Checkout';
import './App.css';

export function App() {


  return (
    <Routes>
      <Route index element={< HomePage />} />
      <Route path="/checkout" element={< Checkout />} />
    </Routes>
  )
}


