import { HomePage } from './Pages/HomePage';
import { Routes,Route } from 'react-router';
import './App.css';

export function App() {
  

  return (
      <Routes>
        <Route index element={< HomePage />} />
        <Route path="checkout" element={<div>Test checkout</div>} />
      </Routes>
  )
}


