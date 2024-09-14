import React from 'react';
type propGridFlex = {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  styleList?: string;
};

export const GridFlex: React.FC<propGridFlex> = ({
  children,
  justifyContent = '',
  alignItems = '',
  styleList,
}) => {
  return (
    <div className={`flex  ${styleList} ${justifyContent} ${alignItems}`}>
      {children}
    </div>
  );
};
