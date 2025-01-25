//ICON
import { IoIosSend } from 'react-icons/io';

const socialLinks = [
  {
    href: 'https://github.com/Guilherme-Rigobello',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/guilhermerigobello-/',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        fill='white'
      >
        <path
          d='M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'LinkedIn',
  },
  {
    href: 'mailto:grigobello@proton.me',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='20'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
        <path d='M22 6l-10 7L2 6' />
      </svg>
    ),
    alt: 'Gmail',
  },
];

const Contact = () => {
  return (
    <section
      id='contact'
      className='pt-28 lg:pt-32 max-w-[1100px] mx-auto'
    >
      <div className='lg:grid lg:grid-cols-2 lg:items-stretch max-lg:mx-4'>
        <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
          <h2 className='mb-4 bg-gradient-to-r from-[#dfdddd] to-[#797981] bg-clip-text text-transparent text-3xl lg:text-4xl lg:leading-tight font-bold '>
            Redes & Contato
          </h2>
          <p className='text-zinc-400 mb-8 max-w-[48ch]'>
            Quer conversar diretamente comigo? Interaja com este formulário que
            logo te responderei!
          </p>

          <div className='flex items-center gap-2'>
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target='_blanck'
                rel='noopener noreferrer'
                className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <form
          action='https://getform.io/f/aejjwmrb'
          method='POST'
          className='xl:pl-10 2xl:pl-20'
        >
          <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-zinc-200 text-sm font-normal mb-2'
              >
                Nome
              </label>
              <input
                type='text'
                id='name'
                name='name'
                autoComplete='name'
                required
                placeholder='João...'
                className='block outline-none w-full p-3 text-sm bg-zinc-800 rounded-sm ring-1 ring-inset ring-transparent transition-shadow hover:ring-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-zinc-200 text-sm font-normal mb-2'
              >
                Sobrenome
              </label>
              <input
                type='text'
                id='text'
                name='nickname'
                autoComplete='family-name'
                placeholder='Da Silva'
                className='block outline-none w-full p-3 text-sm bg-zinc-800 rounded-sm ring-1 ring-inset ring-transparent transition-shadow hover:ring-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-zinc-200 text-sm font-normal mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                autoComplete='email'
                required
                placeholder='joao@email.com'
                className='block outline-none w-full p-3 text-sm bg-zinc-800 rounded-sm ring-1 ring-inset ring-transparent transition-shadow hover:ring-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-zinc-200 text-sm font-normal mb-2'
              >
                Whatsapp
              </label>
              <input
                type='tel'
                id='tel'
                name='tel'
                autoComplete='tel'
                required
                placeholder='+5511123456789'
                className='block outline-none w-full p-3 text-sm bg-zinc-800 rounded-sm ring-1 ring-inset ring-transparent transition-shadow hover:ring-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400'
              />
            </div>

          </div>

          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-zinc-200 text-sm font-normal mb-2'
            >
              Mensagem
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Olá!'
              required
              className='resize-y max-h-44 min-h-32 block outline-none w-full p-3 text-sm bg-zinc-800 rounded-sm ring-1 ring-inset ring-transparent transition-shadow hover:ring-50/5 focus:ring-sky-400 focus:ring-2 placeholder:text-zinc-400'
            ></textarea>
          </div>

          <button
            type='submit'
            className='flex items-center justify-center gap-1.5 text-[14px] has:pr-3 h-9 px-5 bg-sky-800 text-zinc-50 hover:bg-sky-700 transition-all duration-200 active:bg-sky-400 rounded-sm font-semibold w-full'
          >
            Enviar <IoIosSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
