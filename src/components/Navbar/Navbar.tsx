import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

interface NavItem {
  label: string;
  link: string;
  className: string;
}

const Navbar = ({ navOpen = false }: { navOpen?: boolean }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActivateBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const link = lastActiveLink.current;
      activeBox.current.style.top = `${link.offsetTop}px`;
      activeBox.current.style.left = `${link.offsetLeft}px`;
      activeBox.current.style.width = `${link.offsetWidth}px`;
      activeBox.current.style.height = `${link.offsetHeight}px`;
    }
  };

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;

    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }

    target.classList.add('active');
    lastActiveLink.current = target;

    if (activeBox.current) {
      activeBox.current.style.top = `${target.offsetTop}px`;
      activeBox.current.style.left = `${target.offsetLeft}px`;
      activeBox.current.style.width = `${target.offsetWidth}px`;
      activeBox.current.style.height = `${target.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActivateBox();

    const handleResize = () => {
      initActivateBox();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'Sobre', link: '#about', className: 'nav-link' },
    { label: 'Projetos', link: '#work', className: 'nav-link' },
    { label: 'Contato', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav
      className={`absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-800 rounded-md ring-inset ring-1 ring-zinc-50/5 transition-transform transform md:static md:flex md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible ${
        navOpen
          ? 'opacity-100 scale-100 visible'
          : 'opacity-0 scale-90 invisible'
      }`}
    >
      <ul className='flex flex-col md:flex-row md:space-x-4'>
        {navItems.map((item, index) => (
          <li key={index} className='flex'>
            <a
              href={item.link}
              className={`nav-link grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/70 hover:text-zinc-50 transition-colors`}
              ref={index === 0 ? lastActiveLink : undefined}
              onClick={activeCurrentLink}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className='active-box absolute bg-zinc-700 -z-10 h-9 transition-[top,left,width,height] duration-500 rounded-md text-black'
        ref={activeBox}
      ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool,
};

export default Navbar;
