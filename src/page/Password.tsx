import React from 'react';
import { GridFlex } from '../UI/GridFlex';
import { Preloader } from '../UI/Preloader';
import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';

import { EventFor } from '../typeTS/otherFunction';
import { Button } from '../componets/form/Button';
import { Input } from '../componets/form/Input';
import { ContainerBlock } from '../UI/ContainerBlock';

interface propPassword {
  objPasswordProp: {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => void;
    setUserEmail: (value: string) => void;
    userEmail: string;
    messagePromise: { [key: string]: string };
    navigateProp: () => void;
  };
}
export const Password: React.FC<propPassword> = ({ objPasswordProp }) => {
  const { onSubmit, setUserEmail, userEmail, messagePromise, navigateProp } =
    objPasswordProp;
  return (
    <ContainerBlock>
      <GridFlex alignItems="items-center" justifyContent="justify-center">
        <Preloader />
        <div className=" text-center">
          <LogoNoText className="w-full mb-8" />
          <div className="desktop:text-4xl laptop:text-3xl   smallMobile:text-2xl tablet:text-2xl mb-4 font-bold">
            Забыли пароль?
          </div>
          <p className="mb-2">
            Чтобы задать новый пароль, введите Email-адрес
            <br /> своего аккаунта Sirius Future.
          </p>
          {messagePromise.error ||
            (messagePromise.access && (
              <div
                className={`${
                  messagePromise.error ? 'text-redColor' : 'text-green'
                } mb-4`}
              >
                {messagePromise.error
                  ? messagePromise.error
                  : messagePromise.access}
              </div>
            ))}
          <form onSubmit={(e) => onSubmit(e)} className="flex flex-col mb-4">
            <Input
              requiredInpt={true}
              valueInpt={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              typeInpt="email"
              placeholderInpt="Эл. почта"
              otherStyle="mb-8"
            />

            <Button typeBtn="submit">Сбросить пароль</Button>
          </form>

          <button
            className="text-blue"
            type="button"
            onClick={() => navigateProp()}
          >
            Войти
          </button>
        </div>
      </GridFlex>
    </ContainerBlock>
  );
};
