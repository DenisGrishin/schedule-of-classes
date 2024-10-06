import React, { useState } from 'react';
import { Password } from '../page/Password';
import { EventFor } from '../typeTS/otherFunction';
import { useNavigate } from 'react-router-dom';
import { getDataBaseFbAPI, resetPasswordAPI } from '../API/api';

export const ContainerPassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const [messagePromise, setMessagePromise] = useState({
    error: '',
    access: '',
  });
  const navigate = useNavigate();
  const onSubmit = async (e: EventFor<'form', 'onSubmit'>) => {
    e.preventDefault();
    setMessagePromise({
      error: '',
      access: '',
    });

    await getDataBaseFbAPI('users/')
      .then((res) => {
        if (res) {
          const arrEmail = Object.values(res).map((it: unknown) => {
            return it.email;
          });

          if (arrEmail.includes(userEmail)) {
            setMessagePromise({
              error: '',
              access: 'Ссылка для сброса пароля отправлена на ваш Email.',
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    await resetPasswordAPI(userEmail)
      .then(() => {})
      .catch((error) => {
        setMessagePromise({
          error: 'Пожалуйста, введите действующий Email-адрес.',
          access: '',
        });
        console.log(error.message);
      });
  };

  const objPasswordProp = {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => onSubmit(e),
    setUserEmail: (value: string) => setUserEmail(value),
    setMessagePromise: (objProp: { error: string; access: string }) =>
      setMessagePromise(objProp),
    userEmail: userEmail,
    messagePromise: messagePromise,
    navigateProp: () => navigate('/login'),
  };

  return <Password objPasswordProp={objPasswordProp} />;
};
