import './App.css';
import { SideBar } from './UI/SideBar';
import { Main } from './UI/Main';
import { GridFlex } from './UI/GridFlex';

import { getSession } from './session';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './hooks/hooks';
import { login, logOut } from './slice/authSlice';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = getSession();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
      dispatch(logOut());
    } else {
      dispatch(login());
      navigate('/');
    }
  }, []);
  return (
    <GridFlex styleList="h-full">
      <SideBar />
      <Main />
    </GridFlex>
  );
}

export default App;
