import React, { useState } from 'react';
import { Reg } from './../page/Reg';
import { useAppDispatch } from '../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { useBoolean } from '../hooks/useBoolean';
import { EventFor } from '../otherFunction/otherFunction';
import { toggleIsPreloader } from '../store/slice/commonSlice';
import { createUserAPI } from '../API/api';
import { isLogin } from '../store/slice/authSlice';

export const ContainerReg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const { value: valueBoolean, setTrue, setFalse } = useBoolean();

  const [userDataRegister, setUserDataRegister] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = async (event: EventFor<'form', 'onSubmit'>) => {
    event.preventDefault();

    // validate the inputs

    if (
      !userDataRegister.email ||
      !userDataRegister.password ||
      !userDataRegister.repeatPassword
    ) {
      setError('Заполните все поля');
      setTrue();
      return;
    }
    if (userDataRegister.password !== userDataRegister.repeatPassword) {
      setError('Пароль должен совпадать');
      setTrue();
      setUserDataRegister({
        ...userDataRegister,
        password: '',
        repeatPassword: '',
      });
      return;
    }
    dispatch(toggleIsPreloader(true));
    createUserAPI(userDataRegister.email, userDataRegister.password)
      .then(() => {
        setError('');
        setFalse();
        navigate('/home');
        dispatch(isLogin());
        dispatch(toggleIsPreloader(false));
      })
      .catch((error) => {
        setTrue();
        setError(error.message);
        if ('Firebase: Error (auth/email-already-in-use).' === error.message) {
          setError('Этот адрес электронной почты уже используется');
        }
        dispatch(toggleIsPreloader(false));
      });
  };

  const objLoginProp = {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => onSubmit(e),
    userDataRegister: userDataRegister,
    setEmailUserDataRegister: (emailValue: string) =>
      setUserDataRegister({ ...userDataRegister, email: emailValue }),
    setPasswordUserDataRegister: (passwordValue: string) =>
      setUserDataRegister({ ...userDataRegister, password: passwordValue }),
    setRepeatPasswordUserDataRegister: (repeatPasswordValue: string) =>
      setUserDataRegister({
        ...userDataRegister,
        repeatPassword: repeatPasswordValue,
      }),
    errorMessage: error,
    valueBoolean: valueBoolean,
    navigateProp: () => navigate('/login'),
  };

  return <Reg objLoginProp={objLoginProp} />;
};
