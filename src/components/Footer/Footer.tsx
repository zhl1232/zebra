import React from 'react';

const Footer: React.FC = () => {

  const currYear = new Date().getFullYear();
  return (
    <div className="w-full flex justify-center text-4xl items-center gap-2.5 py-8">
      <div className="text-[16px]">© {currYear} Zebra, Inc.</div>
    </div>
  );
}

export default Footer;