import React, { useState } from 'react';
import { GridFlex } from '../UI/GridFlex';
import { Preloader } from '../UI/Preloader';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { useBoolean } from '../hooks/useBoolean';
import { useNavigate } from 'react-router-dom';
import { resetPasswordAPI } from '../API/api';
import { EventFor } from '../otherFunction/otherFunction';

export const Password = () => {
  const { value: valueBoolean, setTrue, setFalse } = useBoolean();
  const [userEmail, setUserEmail] = useState('');
  const [messagePromise, setMessagePromise] = useState({
    error: '',
    access: '',
  });
  const navigate = useNavigate();
  const onSubmit = async (e: EventFor<'form', 'onSubmit'>) => {
    e.preventDefault();
    setFalse();
    setMessagePromise({
      error: '',
      access: '',
    });
    await resetPasswordAPI(userEmail)
      .then(() => {
        setTrue();
        setMessagePromise({
          error: '',
          access: 'Ссылка для сброса пароля отправлена на ваш Email.',
        });
      })
      .catch((error) => {
        debugger;
        setMessagePromise({
          error: 'Пожалуйста, введите действующий Email-адрес.',
          access: '',
        });
        setTrue();
      });
  };

  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <Preloader />
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold">Забыли пароль?</div>
        <p className="mb-2">
          Чтобы задать новый пароль, введите Email-адрес
          <br /> своего аккаунта Sirius Future.
        </p>
        {valueBoolean && (
          <div className="text-redColor mb-4">
            {messagePromise.error === ''
              ? messagePromise.access
              : messagePromise.error}
          </div>
        )}
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Эл. почта"
            className="mb-8 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />

          <button
            className="bg-purple py-3 text-lg font-bold rounded-[30px] text-white"
            type="submit"
          >
            Сбросить пароль
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
