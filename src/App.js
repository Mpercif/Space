import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Components/Home';
import { Destination } from './Components/Destination';
import { Crew } from './Components/Crew';
import { Technology } from './Components/Technology';
import { Navbar } from './Components/Navbar';

export const App = () => {

  const {pathname}  = useLocation()
  const actualRoute = pathname.split("/")[1]
  return <div className={
          actualRoute === ''
          ? `body body__background--home`
          : `body body__background--${actualRoute}`
        }
  >
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="tech" element={<Technology />} />
        </Routes>
  </div>
};
