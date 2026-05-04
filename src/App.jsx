import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Feature from './components/sections/Feature';
import Banner from './components/sections/Banner';
import Specialties from './components/sections/Specialties';
import Enterprise from './components/sections/Enterprise';
import Testimoni from './components/sections/Testimoni';
import Support from './components/sections/Support';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className='min-h-screen max-w-screen bg-amber-200'>
      <Navbar />
      <Hero />
      <Feature />
      <Banner />
      <Specialties />
      <Enterprise />
      <Testimoni />
      <Support />
      <CTA />
      <Footer />
    </div>
  )
}

export default App