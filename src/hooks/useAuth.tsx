import { useAppDispatch, useAppSelector } from './hooks';
import { getSession } from '../session';
import { isLogin } from '../store/slice/authSlice';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => {
    return state.authR.isAuth;
  });
  const dispatch = useAppDispatch();
  const tokenAuth = getSession();

  if (tokenAuth.accessToken) {
    dispatch(isLogin());
  }

  return [isAuth, tokenAuth];
};
