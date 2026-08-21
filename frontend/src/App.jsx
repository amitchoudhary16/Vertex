import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes,useLocation } from 'react-router-dom'
import SeatLayout from './pages/SeatLayout'
import Movies from './pages/Movies'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Favorites from './pages/Favorites'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'



const App = () => {

    const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<SeatLayout />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/mybookings' element={<MyBookings />} />
        <Route path='/Favorites' element={<Favorites />} />
        
        
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
