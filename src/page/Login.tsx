import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from '../UI/GridFlex';

import { EventFor } from '../otherFunction/otherFunction';

import { Preloader } from '../UI/Preloader';

interface propLogin {
  objLoginProp: {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => void;
    userDataLogin: { email: string; password: string };
    valueBoolean: boolean;
    setUserEmailValue: (value: string) => void;
    setUserPasswordValue: (value: string) => void;

    errorMessage: string;
    navigateProp: () => void;
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
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <Preloader />
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold">Вход в Sirius Future</div>
        {valueBoolean && (
          <div className="text-redColor mb-4">{errorMessage}</div>
        )}
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            value={userDataLogin.email}
            onChange={(e) => setUserEmailValue(e.target.value)}
            type="email"
            placeholder="Эл. почта"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />
          <input
            value={userDataLogin.password}
            onChange={(e) => setUserPasswordValue(e.target.value)}
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
          onClick={() => navigateProp()}
        >
          Регестрация
        </button>
      </div>
    </GridFlex>
  );
};
