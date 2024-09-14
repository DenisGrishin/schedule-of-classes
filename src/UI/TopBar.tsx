import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { GridFlex } from './GridFlex';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import MessagesChat from '../img/icon/MessagesChat.svg';
import { useNavigate } from 'react-router-dom';
import { endSession } from './../session';
import { logOut } from '../slice/authSlice';
import Ava from '../img/avatar.png';
export const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => {
    return state.authR.isAuth;
  });

  const onLogout = () => {
    endSession();
    navigate('/login');
    dispatch(logOut());
  };
  return (
    <GridFlex justifyContent="justify-end gap-3 pr-16 py-4 border border-solid border-[#F6F6FE] rounded-[0px_0px_20px_20px]">
      {isAuth ? (
        <>
          <div className="rounded-full flex  items-center justify-center border-solid  h-[42px] w-[42px] border border-borderPurple">
            <Menu>
              <MenuButton>
                <img src={MessagesChat} alt="Messages" />
              </MenuButton>
              <MenuItems anchor="bottom">
                <MenuItem>
                  <a
                    className="block data-[focus]:bg-blue-100"
                    href="/settings"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/support">
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-blue-100" href="/license">
                    License
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="rounded-full border-solid  h-[42px] w-[42px] border border-borderPurple">
            <Menu>
              <MenuButton>
                <img src={Ava} alt="Avatar" />
              </MenuButton>
              <MenuItems anchor="bottom">
                <MenuItem>
                  <button
                    className="block data-[focus]:bg-blue-100"
                    onClick={onLogout}
                  >
                    Выход
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>Войти</button>
      )}
    </GridFlex>
  );
};
