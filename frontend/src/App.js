import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import MainNewsCarousel from './components/MainNewsCarousel';
import NewsCategories from './components/NewsCategories';
import './scss/app.scss';
import MostRead from './components/MostRead';
import Footer from './components/Footer';
import {LiaCopyrightSolid} from 'react-icons/lia'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="carousel-container">
      <Menu />
      <MainNewsCarousel />  
      </div>
      <NewsCategories />
      <hr />
      <MostRead />
      <hr />
      <Footer />
      <div className='copyrights'>
        <h1>Copyrights<LiaCopyrightSolid /> by Hussein Jaber</h1>
      </div>
      
    </div>
  );
}

export default App;
