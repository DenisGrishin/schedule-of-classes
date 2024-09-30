import React from 'react';
import PreloaderGIF from '../img/icon/preloader.gif';
import { useAppSelector } from '../hooks/hooks';

export const Preloader: React.FC<propPreloader> = () => {
  const isPreloader = useAppSelector((state) => {
    return state.commonR.isPreloader;
  });
  return (
    isPreloader && (
      <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[#ffffff9a]">
        <img className="" src={PreloaderGIF} alt="PreloaderGIF" />
      </div>
    )
  );
};
