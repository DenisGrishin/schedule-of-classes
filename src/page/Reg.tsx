import React, { useEffect, useState } from 'react';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from './../UI/GridFlex';
import { useNavigate } from 'react-router-dom';
import { EventFor } from '../otherFunction/otherFunction';
import { useAppDispatch } from '../hooks/hooks';
import { isLogin } from '../store/slice/authSlice';
import { createUserAPI } from '../API/api';
import { useBoolean } from '../hooks/useBoolean';
import { toggleIsPreloader } from '../store/slice/commonSlice';
import { Preloader } from '../UI/Preloader';

export const Reg = () => {
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

  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <Preloader />
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold ">
          Регистарция в Sirius Future
        </div>
        {valueBoolean && <div className="text-redColor mb-4">{error}</div>}
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            onChange={(e) =>
              setUserDataRegister({
                ...userDataRegister,
                email: e.target.value,
              })
            }
            value={userDataRegister.email}
            type="email"
            placeholder="Эл. почта"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />
          <input
            value={userDataRegister.password}
            onChange={(e) =>
              setUserDataRegister({
                ...userDataRegister,
                password: e.target.value,
              })
            }
            type="password"
            placeholder="Пароль"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3  "
          />
          <input
            value={userDataRegister.repeatPassword}
            onChange={(e) =>
              setUserDataRegister({
                ...userDataRegister,
                repeatPassword: e.target.value,
              })
            }
            type="password"
            placeholder="Пароль ещё раз"
            className=" border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3 mb-8 "
          />
          <button
            className="bg-purple py-3 text-lg font-bold rounded-[30px] text-white"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <button
          className="text-blue"
          type="button"
          onClick={() => navigate('/login')}
        >
          Войти
        </button>
      </div>
    </GridFlex>
  );
};
