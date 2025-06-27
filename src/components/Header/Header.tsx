import { useState } from 'react';
// COMPONENT
import Navbar from '../Navbar/Navbar';
//IMPORT IMG'S
import logo from '../../../public/logo/logo.svg'
// ICONS
import { MdMenu, MdClose } from 'react-icons/md';
import { BiSolidMessageAltDetail } from 'react-icons/bi';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-stone-900 border-b border-stone-800 max-md:px-1'>
      <div className='max-w-[1150px] w-full mx-auto px-4 flex justify-between items-center md:px-6'>
        <h1>
          <a href='#home'>
            <img
              src={logo}
              alt='logo'
              width={32}
              height={32}
            />
          </a>
        </h1>

        <div className='relative md:justify-self-center'>
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className='menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-md ring-inset ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95 duration-200'
          >
            <span className='text-xl'>
              {navOpen ? <MdClose /> : <MdMenu />}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href='#contact'
          className='max-w-max h-11 flex items-center gap-2 px-7 rounded-3xl font-semibold text-sm ring-1 ring-zinc-50/5 ring-inset max-md:hidden md:justify-self-end bg-zinc-50/10 text-zinc-300 hover:translate-y-[-2px] transition-all duration-300 active:bg-zinc-50/80'
        >
          Entre em Contato
          <span className='text-lg'>
            <BiSolidMessageAltDetail />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
