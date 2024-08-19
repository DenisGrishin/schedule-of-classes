import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Schedule } from '../page/Schedule';
// import { Aaa } from './../page/Aaa';
// import { Sdsa } from '../page/Sdsa';

export const Main: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      {/* <Route path="/aaa" element={<Aaa />} /> */}
      {/* <Route path="/sdsa" element={<Sdsa />} /> */}
    </Routes>
  );
};
