import React, { useState } from 'react';
import { Login } from '../page/Login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { useBoolean } from '../hooks/useBoolean';
import { EventFor } from '../otherFunction/otherFunction';
import { toggleIsPreloader } from '../store/slice/commonSlice';
import { signInUserAPI } from '../API/api';
import { isLogin } from '../store/slice/authSlice';

export const ContainerLogin = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { value: valueBoolean, setTrue, setFalse } = useBoolean();
  const [error, setError] = useState('');

  const [userDataLogin, setUserDataLogin] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (event: EventFor<'form', 'onSubmit'>) => {
    event.preventDefault();

    // validate the inputs
    if (!userDataLogin.email || !userDataLogin.password) {
      setError('Пожалуйста, введите свое имя пользователя и пароль.');
      setTrue();
      return;
    }

    // clear the errors
    setError('');
    dispatch(toggleIsPreloader(true));
    signInUserAPI(userDataLogin.email, userDataLogin.password)
      .then(() => {
        setError('');
        setFalse();
        navigate('/home');
        dispatch(isLogin());
        dispatch(toggleIsPreloader(false));
      })
      .catch((error) => {
        setTrue();
        setError('Имя пользователя или пароль введены неверно');

        dispatch(toggleIsPreloader(false));
      });

    // TODO: send the login request
    console.log('Logging in...');
  };

  const objLoginProp = {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => onSubmit(e),
    userDataLogin: userDataLogin,
    valueBoolean: valueBoolean,
    setUserEmailValue: (emailValue: string) =>
      setUserDataLogin({ ...userDataLogin, email: emailValue }),
    setUserPasswordValue: (passwordValue: string) =>
      setUserDataLogin({ ...userDataLogin, password: passwordValue }),
    errorMessage: error,
    navigateProp: (path: string) => navigate(path),
  };

  return <Login objLoginProp={objLoginProp} />;
};
