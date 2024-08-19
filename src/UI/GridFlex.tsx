import React from 'react';
type propGridFlex = {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
};

export const GridFlex: React.FC<propGridFlex> = ({
  children,
  justifyContent = '',
  alignItems = '',
}) => {
  return (
    <div className={`flex h-full ${justifyContent} ${alignItems}`}>
      {children}
    </div>
  );
};
