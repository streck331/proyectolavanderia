import React from 'react';
import Hero from '../Hero';
import Servicios from '../Servicios';
import SobreNosotros from '../SobreNosotros';
import ReservaAhora from '../ReservaAhora'; 
import Footer from '../Footer'; 

const Home = () => {
  return (
    <div>
      <Hero />
      <Servicios />
      <SobreNosotros />
      <ReservaAhora />
      <Footer />
    </div>
  );
};

export default Home;