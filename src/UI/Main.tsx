import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Schedule } from '../page/Schedule';
import { TopBar } from './TopBar';

export const Main: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
};
