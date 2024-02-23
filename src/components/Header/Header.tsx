import React from 'react';
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown';

interface HeaderProps {
  pageTitle: string;
  category: string;
};
const Header: React.FC<HeaderProps> = ({ pageTitle }) => {

  return (
    <div 
      className='w-11/12 flex justify-between text-4xl items-center gap-2.5 py-8'
    >
        <div className="text-[48px] font-bold">{pageTitle}</div>
        <LanguageDropDown />
    </div>
  )
}

export default Header;