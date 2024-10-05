import { useEffect } from 'react';
import { authFB } from '../API/api';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from '../hooks/hooks';
import { getUserUID } from '../store/slice/authSlice';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(authFB, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(getUserUID(uid));
      } else {
        console.log('нет юзера');
      }
    });

    // getOnValueDataFbAPI('users/', (snapshot) => {
    //   const dataItem = snapshot.val();
    //   console.log(dataItem);
    // });
  }, []);

  return <div>home</div>;
};
