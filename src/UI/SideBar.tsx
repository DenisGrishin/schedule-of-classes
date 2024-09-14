import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../img/icon/logo.svg?react';
import HomeIcon from '../img/icon/homeIcon.svg?react';
import WalletIcon from '../img/icon/walletIcon.svg?react';

interface propListLink {
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
  link: string;
}

export const SideBar: React.FC = () => {
  const [positionRow, setPositionRow] = useState(0);
  const [isIndxLink, setIndxLink] = useState(0);

  const getPositionRow = (indx: number = 0) => {
    const sum = (100 / linkList.length).toFixed();
    setPositionRow(+sum * indx);
    setIndxLink(indx);
  };

  const linkList: propListLink[] = [
    {
      icon: <HomeIcon className={isIndxLink === 0 ? 'active-fill' : ''} />,
      text: 'Главная',
      link: 'home',
    },
    {
      icon: <WalletIcon className={isIndxLink === 1 ? 'active-stroke' : ''} />,
      text: 'Расписание',
      link: 'schedule',
    },
  ];
  return (
    <aside className="h-full flex-[0_0_236px]">
      <div className="rounded-[30px] bg-lightPurple h-full py-11 pr-5 ">
        <Link to="/home">
          <LogoIcon className="pl-11" />
        </Link>
        <nav className="mt-12">
          <ul className="relative">
            <li
              style={{ top: `${positionRow}%` }}
              className={`   transition-all w-full rounded-r-[30px]   absolute h-10 bg-purple before:w-full`}
            ></li>
            {linkList.map((el, indx) => (
              <li
                onClick={() => getPositionRow(indx)}
                key={indx}
                className="flex items-center h-10 pl-11"
              >
                <Link
                  to={el.link}
                  className={`${
                    indx === isIndxLink ? 'text-white' : ''
                  } flex relative z-10 items-center  gap-2.5`}
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
