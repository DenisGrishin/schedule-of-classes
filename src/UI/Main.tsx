import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Schedule } from '../page/Schedule';
import { TopBar } from './TopBar';
import { Login } from '../page/Login';

import { Reg } from './../page/Reg';
import ErrorPage from '../page/ErrorPage';

export const Main: React.FC = () => {
  return (
    <div className="w-full">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route errorElement={<ErrorPage />} />
      </Routes>
    </div>
  );
};
