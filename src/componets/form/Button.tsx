import React from 'react';

import { EventFor } from '../../typeTS/otherFunction';

type propButton = {
  typeBtn: 'button' | 'submit';
  styleOther?: string;
  onClick?: (e?: EventFor<'button', 'onClick' | 'onSubmit'>) => void;
  children: React.ReactNode;
};

export const Button: React.FC<propButton> = ({
  typeBtn,
  onClick,
  styleOther,
  children,
}) => {
  return (
    <button
      className={`${styleOther} bg-purple py-3 desktop:text-lg tablet:text-base  smallMobile:text-sm font-bold rounded-[30px] text-white`}
      type={typeBtn}
      onClick={(e: EventFor<'button', 'onClick' | 'onSubmit'>) => onClick?.(e)}
    >
      {children}
    </button>
  );
};
