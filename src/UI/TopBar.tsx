import React from 'react';
import { GridFlex } from './GridFlex';
import Ava from '../img/avatar.png';
import MessagesChat from '../img/icon/MessagesChat.svg';
export const TopBar = () => {
  return (
    <GridFlex>
      <div className="rounded-full flex items-center justify-center border-solid  h-[42px] w-[42px] border border-borderPurple">
        <img src={MessagesChat} alt="Messages" />
      </div>
      <div className="rounded-full border-solid  h-[42px] w-[42px] border border-borderPurple">
        <img src={Ava} alt="Avatar" />
      </div>
    </GridFlex>
  );
};
