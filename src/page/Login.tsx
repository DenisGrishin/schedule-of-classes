import React, { useState } from 'react';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from '../UI/GridFlex';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { EventFor } from '../otherFunction/otherFunction';
import { isLogin } from '../store/slice/authSlice';
import { signInUserAPI } from '../API/api';

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event: EventFor<'form', 'onSubmit'>) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError('Please enter your username and password.');
      return;
    }

    // clear the errors
    setError('');

    signInUserAPI(email, password)
      .then(() => {
        navigate('/home');
        dispatch(isLogin());
      })
      .catch((error) => console.error(error.message));

    // onAuthStateChanged(authFB, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     console.log('нет юзера');
    //   }

    // TODO: send the login request
    console.log('Logging in...');
  };

  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold">Вход в Sirius Future</div>
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Эл. почта"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
