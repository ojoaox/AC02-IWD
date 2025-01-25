//COMPONENTS
import { ButtonPrimary } from '../Button/Button';
//ICONS
import { MdKeyboardArrowRight } from 'react-icons/md';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Sobre Mim',
    href: '#about',
  },
  {
    label: 'Portfolio',
    href: '#work',
  },
  {
    label: 'Contato',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Guilherme-Rigobello',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilhermerigobello-/',
  },
  {
    label: 'Email',
    href: 'mailto:grigobello@proton.me',
  },
];

const Footer = () => {
  return (
    <footer className='pt-28 lg:pt-40 max-w-[1100px] mx-auto lg:pb-20  pb-4'>
      <div className='max-lg:mx-4'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='mb-8 bg-gradient-to-r from-[#dfdddd] to-[#58585e] bg-clip-text text-transparent text-4xl lg:text-5xl lg:leading-tight font-bold'>
              Infos & Sitemap
            </h2>

            <ButtonPrimary
              href='mailto:grigobello@proton.me'
              label='Vamos Conversar'
              icon={<MdKeyboardArrowRight className='text-xl' />}
              classes=' flex items-center gap-1 text-[14px] has:pr-3 h-11 w-[176px] px-5 bg-sky-400 hover:bg-sky-700 transition-all duration-200 active:bg-sky-400 rounded-md font-semibold bg-sky-800 text-zinc-300'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20 lg:mt-4'>
            <div className=''>
              <p className='mb-2'>Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <p className='mb-2'>Redes</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                      target='_blanck'
                      rel='noopener noreferrer'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-10 mb-8'>
         
          <p className='text-zinc-500 text-sm font-semibold'>
            &copy; 2025 <span className='text-zinc-300'>grigobello</span>
          </p>
          <a href=''>
            <img
              src='./public/logo/logo.svg'
              width={30}
              height={30}
              alt='logo'
              className='mr-10'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
