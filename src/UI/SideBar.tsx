import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../img/icon/logo.svg?react';
import HomeIcon from '../img/icon/homeIcon.svg?react';
import WalletIcon from '../img/icon/walletIcon.svg?react';

interface propListLink {
  icon: any;
  text: string;
  link: string;
}

export const SideBar: React.FC = () => {
  const [isActive, setIsActive] = useState(0);
  const [isIndxLink, setIndxLink] = useState(0);

  const qw = (indx: number = 0) => {
    const sum = (100 / linkList.length).toFixed();
    setIsActive(+sum * indx);
    setIndxLink(indx);
  };

  const linkList: propListLink[] = [
    {
      icon: <HomeIcon className={isIndxLink === 0 ? 'active-fill' : ''} />,
      text: 'Главная',
      link: '',
    },
    {
      icon: <WalletIcon className={isIndxLink === 1 ? 'active-stroke' : ''} />,
      text: 'Расписание',
      link: 'schedule',
    },
    // {
    //   icon: <WalletIcon className={isIndxLink === 2 ? 'active-stroke' : ''} />,
    //   text: 'sda',
    //   link: 'aaa',
    // },
  ];
  return (
    <aside className="h-full flex-[0_0_236px]">
      <div className="rounded-[30px] bg-lightPurple h-full p-11 pr-5">
        <Link to="">
          <LogoIcon />
        </Link>
        <nav className="mt-12 relative">
          <ul
            className={`before:content-[''] before:top-${2}  before:transition-all  before:absolute before:h-10 before:bg-purple before:w-full`}
          >
            {linkList.map((el, indx) => (
              <li onClick={() => qw(indx)} key={indx} className="py-2">
                <Link
                  to={el.link}
                  className={`${
                    indx === isIndxLink ? 'text-white' : ''
                  } flex relative z-10 items-center gap-2.5`}
                >
                  {el.icon}
                  <span className="leading-4">{el.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
