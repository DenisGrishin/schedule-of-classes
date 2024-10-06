import React, { HTMLInputTypeAttribute } from 'react';
import { EventFor } from '../../typeTS/otherFunction';
type propInput = {
  typeInpt: HTMLInputTypeAttribute;
  placeholderInpt: string;
  valueInpt: string;
  requiredInpt?: boolean;
  otherStyle: string;
  onChange: (e: EventFor<'input', 'onChange'>) => void;
};
export const Input: React.FC<propInput> = ({
  typeInpt,
  placeholderInpt,
  valueInpt,
  otherStyle,
  requiredInpt,
  onChange,
}) => {
  return (
    <input
      type={typeInpt}
      placeholder={placeholderInpt}
      value={valueInpt}
      required={requiredInpt}
      className={`${otherStyle} border border-solid border-[#ECECEC] rounded-lg py-2.5 px-3`}
      onChange={(e) => onChange?.(e)}
    />
  );
};
