//IMPORT LOGO
import logo from '../../../public/logo/logo.svg'

//DATA
const aboutItems = [
  {
    label: 'Projetos',
    string: '10+',
  },
  {
    label: 'Médio Técnico na FIAP',
    string: '3º',
  },
];

const About = () => {
  return (
    <section
      id='about'
      className='pt-16 max-md:pt-10 flex justify-center items-center'
    >
      <div className='container mx-4'>
        <div className='bg-zinc-800/50 p-7 rounded-md md:p-12 max-w-[1100px] mx-auto reveal-up'>
          <p className='text-zinc-300 mb-8 md:mb-12 md:text-lg md:max-w-[60ch]'>
            Somos dois desenvolvedores passionados pela tecnologia e criação: um com foco em Back-End, sempre explorando bancos de dados como SQL e NoSQL, e outro especializado em Front-End e design gráfico, com experiência em React, Tailwind e ferramentas como Figma. Unimos nossos conhecimentos técnicos e soft skills para desenvolver projetos completos, que combinam funcionalidade, estética e colaboração eficiente.

          </p>

          <div className='flex flex-wrap items-center gap-5 md:gap-7 md:mb-2 '>
            {aboutItems.map(({ label, string }, key) => (
              <div key={key} className='mb-4 text-center'>
                <div className='font-semibold flex items-center'>
                  <span className='text-2xl font-bold md:text-4xl'>
                    {string}
                  </span>
                </div>
                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}
            <div className='flex justify-center ml-auto'>
              <img
                className=' md:w-[35px] md:h-[35px]'
                src={logo}
                alt='logo'
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
