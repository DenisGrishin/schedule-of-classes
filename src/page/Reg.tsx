import LogoNoText from '../img/icon/logo-icon-no-text.svg?react';
import { GridFlex } from './../UI/GridFlex';
import { EventFor } from '../typeTS/otherFunction';
import { Preloader } from '../UI/Preloader';
import { Button } from '../componets/form/Button';
import { Input } from '../componets/form/Input';
import { ContainerBlock } from '../UI/ContainerBlock';

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
    <ContainerBlock>
      <GridFlex alignItems="items-center" justifyContent="justify-center">
        <Preloader />
        <div className=" text-center">
          <LogoNoText className="w-full mb-8" />
          <div className="desktop:text-4xl laptop:text-3xl   smallMobile:text-2xl tablet:text-2xl mb-4 font-bold ">
            Регистарция в Sirius Future
          </div>
          {valueBoolean && (
            <div className="text-redColor mb-4">{errorMessage}</div>
          )}
          <form onSubmit={onSubmit} className="flex flex-col mb-4">
            <Input
              requiredInpt={true}
              onChange={(e) => setEmailUserDataRegister(e.target.value)}
              valueInpt={userDataRegister.email}
              typeInpt="email"
              placeholderInpt="Эл. почта"
              otherStyle="mb-3"
            />
            <Input
              requiredInpt={true}
              valueInpt={userDataRegister.password}
              onChange={(e) => setPasswordUserDataRegister(e.target.value)}
              typeInpt="password"
              placeholderInpt="Пароль"
              otherStyle="mb-3"
            />
            <Input
              requiredInpt={true}
              valueInpt={userDataRegister.repeatPassword}
              onChange={(e) =>
                setRepeatPasswordUserDataRegister(e.target.value)
              }
              typeInpt="password"
              placeholderInpt="Пароль ещё раз"
              otherStyle="mb-8"
            />
            <Button typeBtn="submit">Зарегистрироваться</Button>
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
