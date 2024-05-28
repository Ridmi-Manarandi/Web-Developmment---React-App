import React from 'react'
import Navbar from './Navbar';
import Header from './Header-Slider';
import Welcome from './Welcome';
import Services from './OurServices';
import Stats from './Stats';
import Testimonials from './Testimonials';
import ClientLogos from './Client-Logos';
import News from './News';
import Footer from './Footer';
import HomeStyles from '../Styles/Home.module.css';

const Home = () => {
  return (
     <div className={HomeStyles.main}>
        <Navbar/>
        <Header/>
        <Welcome/>
        <Services/>
        <Stats/>
        <Testimonials/>
        <ClientLogos/>
        <News/>
        <Footer/>
     </div>
  )
}

export default Home;
