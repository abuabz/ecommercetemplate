import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CategoriesNavbar from './components/Catagories';
import Carousel from './components/Carousal';
import Topcategories from './components/Topcategories';
import PopularProducts from './components/PopularProducts';
import MoreOfferPage from './components/moreOfferpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <CategoriesNavbar  />

      <Carousel />
      <Topcategories />
      <PopularProducts />
      <MoreOfferPage/>

      <Footer/>
    </div>
  );
}

export default App;
