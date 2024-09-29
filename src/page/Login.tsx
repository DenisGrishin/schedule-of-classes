import React, { useState } from 'react';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from '../UI/GridFlex';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { EventFor } from '../otherFunction/otherFunction';
import { isLogin } from '../store/slice/authSlice';
import { signInUserAPI } from '../API/api';
import { useBoolean } from '../hooks/useBoolean';

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { value: valueBoolean, setTrue, setFalse } = useBoolean();
  const [error, setError] = useState('');

  const [userDataRegister, setUserDataRegister] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (event: EventFor<'form', 'onSubmit'>) => {
    event.preventDefault();

    // validate the inputs
    if (!userDataRegister.email || !userDataRegister.password) {
      setError('Пожалуйста, введите свое имя пользователя и пароль.');
      setTrue();
      return;
    }

    // clear the errors
    setError('');

    signInUserAPI(userDataRegister.email, userDataRegister.password)
      .then(() => {
        setError('');
        setFalse();
        navigate('/home');
        dispatch(isLogin());
      })
      .catch((error) => {
        setTrue();
        setError('Имя пользователя или пароль введены неверно');
        console.error(error.message);
      });

    // TODO: send the login request
    console.log('Logging in...');
  };

  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold">Вход в Sirius Future</div>
        {valueBoolean && <div className="text-redColor mb-4">{error}</div>}
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            value={userDataRegister.email}
            onChange={(e) =>
              setUserDataRegister({
                ...userDataRegister,
                email: e.target.value,
              })
            }
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
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3 mb-8 "
          />
          <button
            className="bg-purple py-3 text-lg font-bold rounded-[30px] text-white"
            type="submit"
          >
            Войти
          </button>
        </form>
        <button
          className="text-blue"
          type="button"
          onClick={() => navigate('/reg')}
        >
          Регестрация
        </button>
      </div>
    </GridFlex>
  );
};
