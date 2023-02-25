import React from 'react'
import '../styles/home.css';
import IMAGES from '../images';

import Navbar from './navbar'
import Hero from './hero';
import Cuisines from './cuisines';
import About from './about';
import Downloads from './download';
import Footer from './footer';


export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Cuisines />
        <About />
        <Downloads />
        <Footer />
    </div>
  )
}
