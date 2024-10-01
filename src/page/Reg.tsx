import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from './../UI/GridFlex';
import { EventFor } from '../otherFunction/otherFunction';
import { Preloader } from '../UI/Preloader';

interface propReg {
  objLoginProp: {
    onSubmit: (e: EventFor<'form', 'onSubmit'>) => void;
    userDataRegister: { [key: string]: string };
    setEmailUserDataRegister: (emailValue: string) => void;
    setPasswordUserDataRegister: (passwordValue: string) => void;
    setRepeatPasswordUserDataRegister: (repeatPasswordValue: string) => void;
    errorMessage: string;
    valueBoolean: boolean;
    navigateProp: () => void;
  };
}
export const Reg: React.FC<propReg> = ({ objLoginProp }) => {
  const {
    onSubmit,
    userDataRegister,
    setEmailUserDataRegister,
    setPasswordUserDataRegister,
    setRepeatPasswordUserDataRegister,
    errorMessage,
    valueBoolean,
    navigateProp,
  } = objLoginProp;

  return (
    <GridFlex alignItems="items-center" justifyContent="justify-center">
      <Preloader />
      <div className=" text-center">
        <LogoNoText className="w-full mb-8" />
        <div className="text-4xl mb-4 font-bold ">
          Регистарция в Sirius Future
        </div>
        {valueBoolean && (
          <div className="text-redColor mb-4">{errorMessage}</div>
        )}
        <form onSubmit={onSubmit} className="flex flex-col mb-4">
          <input
            required
            onChange={(e) => setEmailUserDataRegister(e.target.value)}
            value={userDataRegister.email}
            type="email"
            placeholder="Эл. почта"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3"
          />
          <input
            required
            value={userDataRegister.password}
            onChange={(e) => setPasswordUserDataRegister(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="mb-3 border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3  "
          />
          <input
            required
            value={userDataRegister.repeatPassword}
            onChange={(e) => setRepeatPasswordUserDataRegister(e.target.value)}
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
          onClick={() => navigateProp()}
        >
          Войти
        </button>
      </div>
    </GridFlex>
  );
};
