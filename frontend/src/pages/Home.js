import React from 'react';
import MainNavbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import MainSlider from '../components/MainSlider';
import TopBanner from '../components/TopBanner';
import Recommendations from '../components/Recommendations';
import VisitedProducts from '../components/VisitedProducts';
import SpecialOffers from '../components/SpecialOffers';

function Home() {
  return (
    <div>
      <MainNavbar />
      <QuickLinks />
      
      <div className="container mt-4">
  <div className="row g-3 align-items-stretch">
    <div className="col-md-8">
      <MainSlider />
    </div>
    <div className="col-md-4">
      <div className="special-offer-box h-100">
        <SpecialOffers />
      </div>
    </div>
  </div>
</div>




      
      <Recommendations />
      <VisitedProducts />
    </div>
  );
}

export default Home;
