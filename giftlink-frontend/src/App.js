import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './components/DetailsPage/DetailsPage';
import LoginPage from './components/LoginPage/LoginPage'; 
import RegisterPage from './components/RegisterPage/RegisterPage'; 
import SearchPage from './components/SearchPage/SearchPage'; 

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          {/* the final code will not pass the products to every page, but each page will call the server API */}
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage />} />
          <Route path="/app/register" element={<RegisterPage />} />
          <Route path="/app/product/:productId" element={<DetailsPage />} />
          <Route path="/app/search" element={<SearchPage />} />
        </Routes>
        <li className="nav-item">
            <Link className="nav-link" to="/app/search">Search</Link>
        </li>
    </>
  );
}

export default App;
