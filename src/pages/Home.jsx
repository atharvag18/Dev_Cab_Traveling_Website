import React from 'react'
import CabBooking from '../components/CabBooking'
import CarSection from '../components/CarSection'
import TaxiRates from '../components/TaxiRates'
import Welcome from '../components/Welcome'
import OurRoutes from '../components/OurRoutes'
 const Home = () => {
  return (
    <div>

    <CabBooking />
    <CarSection />
    <TaxiRates />
    <Welcome />
    <OurRoutes />
    </div>
  )
}

export default Home;
