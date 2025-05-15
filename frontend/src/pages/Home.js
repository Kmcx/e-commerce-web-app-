import React from 'react';
import MainNavbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import QuickLinks from '../components/QuickLinks';
import SpecialOffers from '../components/SpecialOffers';
import Recommendations from '../components/Recommendations';
import VisitedProducts from '../components/VisitedProducts';
import TopBanner from '../components/TopBanner'; // yeni eklenecek
import DailyDeal from '../components/DailyDeal'; // yeni eklenecek

function Home() {
  return (
    <>
      <MainNavbar />

      <QuickLinks />

      <MainSlider />

      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <TopBanner />
          </div>
          <div className="col-md-4">
            <DailyDeal />
          </div>
        </div>
      </div>

      <Recommendations />
      <VisitedProducts />
    </>
  );
}

export default Home;
