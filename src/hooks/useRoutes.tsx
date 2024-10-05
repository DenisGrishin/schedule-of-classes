import { Home } from '../page/Home';
import { Route, Routes } from 'react-router-dom';
import { Schedule } from './../page/Schedule';
import { PrivateRoute } from '../componets/PrivateRoute';
import { ContainerLogin } from './../componets/ContainerLogin';
import { ContainerReg } from '../componets/ContainerReg';
import { ContainerPassword } from '../componets/ContainerPassword';
import { Main } from '../UI/Main';

export const useRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>
      <Route path="/login" element={<ContainerLogin />}>
        {/* <Route path="/login" /> */}
        <Route index element={<ContainerLogin />} />
        <Route path="password" element={<ContainerPassword />} />
        <Route path="reg" element={<ContainerReg />} />
      </Route>
    </Routes>
  );
};
