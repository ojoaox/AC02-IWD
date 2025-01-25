//DATA
const aboutItems = [
  {
    label: 'Projetos',
    string: '7+',
  },
  {
    label: 'Médio Técnico na FIAP',
    string: '3º',
  },
];

const About = () => {
  return (
    <section id='about' className='pt-16 max-md:pt-10 flex justify-center items-center'>
      <div className='container mx-4'>
        <div className='bg-zinc-800/50 p-7 rounded-md md:p-12 max-w-[1100px] mx-auto reveal-up'>
          <p className='text-zinc-300 mb-8 md:mb-12 md:text-lg md:max-w-[60ch]'>
            Mais de 1 ano sempre aprendendo e criando projetos para aprimorar
            minhas habilidades, com grande foco nas Soft Skills, essencial no
            meio corporativo. Atualmente estou cursando o ensino médio técnico
            na FIAP School, além disso, ao decorrer dos anos, acredito que
            demostrei meus maiores interesses em Back-End, como SQL e NoSQL.
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
                src='./public/logo/logo.svg'
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
