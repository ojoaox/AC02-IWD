//COMPONENT
import { ButtonPrimary } from '../Button/Button';
import Curriculo from '../../../public/curriculo/MyProfile.pdf';
//IMPORT IMG'S
import img1 from '../../../public/me/me.png'
import img2 from '../../../public/me/me2.svg'
//ICONS
import { RiDownloadFill } from 'react-icons/ri';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-40'>
      <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10 max-w-[1100px] px-4 lg:px-8 xl:max-w-6xl mx-auto'>
        <div className='flex flex-col '>
          <div className='flex items-center gap-4'>
            <figure className='w-9 h-9'>
              <img
                src={img2}
                alt='guilherme-img'
                className='rounded-md bg-zinc-700 overflow-hidden w-full h-full object-cover'
              />
            </figure>
            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400 me-1'>
                <span className='inset-0 rounded-full absolute bg-emerald-400 animate-ping'></span>
              </span>
              Disponível para Trabalho
            </div>
          </div>

          <h2 className=' my-8 bg-gradient-to-r from-[#fafafa] to-[#58585e] bg-clip-text text-transparent text-5xl leading-tight font-semibold lg:text-[45px] lg:leading-[1.15] sm:max-w-[20ch] max-w-[15ch] lg:max-w-[15ch]'>
            -- Desenvolvedor Back-End | Front-End
          </h2>

          <div className='flex gap-3'>
            <ButtonPrimary
              label='Download CV'
              href={Curriculo}
              icon={<RiDownloadFill />}
              classes=' flex items-center gap-2 text-[14px] has:pr-3 h-11 px-5 bg-sky-800 text-zinc-50 hover:bg-sky-600 transition-all duration-200 active:bg-sky-400 rounded-md font-medium'
            />
            <ButtonPrimary
              label='Scroll down'
              href='#work'
              icon={<FaArrowDown />}
              classes=' flex items-center gap-2 text-[14px] has:pr-3 h-11 px-5 bg-zinc-800 text-zinc-50 hover:bg-zinc-700 transition-all duration-200 active:bg-zinc-800 rounded-md font-medium'
            />
          </div>
        </div>

        <div className='hidden lg:block'>
          <figure className='w-full max-w-[430px] ml-auto'>
            <img src={img1} alt='guilherme-img' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
