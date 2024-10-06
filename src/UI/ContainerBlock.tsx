import React from 'react';
type propContainerBlock = {
  children: React.ReactNode;
};

export const ContainerBlock: React.FC<propContainerBlock> = ({ children }) => {
  return (
    <div className="max-w-screen-xl h-full mx-auto my-0 px-4">{children}</div>
  );
};
