import { Home } from '../page/Home';
import { Route, Routes } from 'react-router-dom';
import { Schedule } from './../page/Schedule';
import { PrivateRoute } from '../componets/PrivateRoute';
import { ContainerLogin } from './../componets/ContainerLogin';
import { ContainerReg } from '../componets/ContainerReg';

export const useRoutes = () => {
  return (
    <Routes>
      <Route index element={<ContainerLogin />} />
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/login" element={<ContainerLogin />} />
      <Route path="/reg" element={<ContainerReg />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
};
