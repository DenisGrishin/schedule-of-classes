import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { TopBar } from '../UI/TopBar';
import { SideBar } from '../UI/SideBar';
import { GridFlex } from '../UI/GridFlex';

export const PrivateRoute = () => {
  const [isAuthenticated, tokenAuth] = useAuth();

  const location = useLocation();
  return tokenAuth.accessToken !== null && isAuthenticated ? (
    <GridFlex>
      <SideBar />
      <div>
        <TopBar />
        <Outlet />
      </div>
    </GridFlex>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
