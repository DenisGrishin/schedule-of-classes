import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from '../UI/GridFlex';

import { EventFor } from '../typeTS/otherFunction';

import { Preloader } from '../UI/Preloader';
import { Button } from '../componets/form/Button';
import { Input } from './../componets/form/Input';
import { ContainerBlock } from '../UI/ContainerBlock';

interface propLogin {
  objLoginProp: {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => void;
    userDataLogin: { email: string; password: string };
    valueBoolean: boolean;
    setUserEmailValue: (value: string) => void;
    setUserPasswordValue: (value: string) => void;

    errorMessage: string;
    navigateProp: (path: string) => void;
  };
}
export const Login: React.FC<propLogin> = ({ objLoginProp }) => {
  const {
    onSubmit,
    userDataLogin,
    valueBoolean,
    setUserEmailValue,
    setUserPasswordValue,
    errorMessage,
    navigateProp,
  } = objLoginProp;
  return (
    <ContainerBlock>
      <GridFlex alignItems="items-center" justifyContent="justify-center">
        <Preloader />
        <div className=" text-center">
          <LogoNoText className="w-full mb-8" />
          <div className="desktop:text-4xl laptop:text-3xl   smallMobile:text-2xl tablet:text-2xl mb-4 font-bold">
            Вход в Sirius Future
          </div>
          {valueBoolean && (
            <div className="text-redColor mb-4">{errorMessage}</div>
          )}
          <form onSubmit={onSubmit} className="flex flex-col mb-4">
            <Input
              requiredInpt={true}
              valueInpt={userDataLogin.email}
              onChange={(e) => setUserEmailValue(e.target.value)}
              typeInpt="email"
              placeholderInpt="Эл. почта"
              otherStyle="mb-3"
            />
            <Input
              requiredInpt={true}
              valueInpt={userDataLogin.password}
              onChange={(e) => setUserPasswordValue(e.target.value)}
              typeInpt="password"
              placeholderInpt="Пароль"
              otherStyle="mb-8"
            />
            <Button typeBtn="submit">Войти</Button>
          </form>
          <GridFlex
            styleList="gap-5"
            justifyContent="justify-center"
            alignItems="items-center"
          >
            <button
              className="text-blue"
              type="button"
              onClick={() => navigateProp('reg')}
            >
              Регестрация
            </button>
            <button
              onClick={() => navigateProp('password')}
              className="text-blue  "
              type="button"
            >
              Забыли пароль?
            </button>
          </GridFlex>
        </div>
      </GridFlex>
    </ContainerBlock>
  );
};
