import React, { useState } from 'react';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from './../UI/GridFlex';
import { useNavigate } from 'react-router-dom';
import { EventFor } from '../otherFunction/otherFunction';
import { useAppDispatch } from '../hooks/hooks';
import { isLogin } from '../store/slice/authSlice';
import { createUserAPI } from '../API/api';

export const Reg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSubmit = async (event: EventFor<'form', 'onSubmit'>) => {
    event.preventDefault();

    // validate the inputs

    if (!email || !password || !repeatPassword) {
      setError('Please fill out all the fields.');
      return;
    }
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    // clear the errors
    setError('');

    createUserAPI(email, password)
      .then(() => {
        navigate('/home');
        dispatch(isLogin());
      })
      .catch((error) => console.error(error.message));

    console.log('Registering...');
  };

  // function writeUserData(userId, name, email, imageUrl) {
  //   const db = getDataBaseFB();
  //   set(ref(db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //   });
  // }
  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold ">
          Регистарция в Sirius Future
        </div>
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="Эл. почта"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3  "
          />
          <input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
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
