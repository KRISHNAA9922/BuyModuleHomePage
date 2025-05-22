import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import SellOldDevice from '../components/home/SellOldDevice';
import OurServices from '../components/home/OurServices';
import TopSellingProducts from '../components/home/TopSellingProducts';
import TopSellingAccessories from '../components/home/TopSellingAccessories';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <HeroSlider />
      <SellOldDevice />
      <OurServices />
      <TopSellingProducts />
      <TopSellingAccessories />
      <Testimonials />
    </div>
  );
};

export default HomePage;
