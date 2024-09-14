import { Login } from '../page/Login';
import { Home } from '../page/Home';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../UI/Main';
import { Schedule } from './../page/Schedule';
import { Reg } from '../page/Reg';
import { PrivateRoute } from '../componets/PrivateRoute';

export const useRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
};
