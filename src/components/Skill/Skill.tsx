//COMPONENT
import SkillCard from './SkillCard';
//ICONS
import {
  FaFigma,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiBootstrap,
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  Icon: IconType;
  label: string;
  desc: string;
  color: string;
}

const skillItem: Skill[] = [
  {
    Icon: FaFigma,
    label: 'Figma',
    desc: 'Design tool',
    color: 'text-[#ff7262]',
  },
  {
    Icon: FaCss3Alt,
    label: 'CSS',
    desc: 'User Interface',
    color: 'text-[#4a90e2]',
  },
  {
    Icon: FaJsSquare,
    label: 'JavaScript',
    desc: 'Interaction',
    color: 'text-[#f7df1e]',
  },
  {
    Icon: FaNodeJs,
    label: 'NodeJS',
    desc: 'Web Server',
    color: 'text-[#68a063]',
  },
  {
    Icon: SiMysql,
    label: 'MySQL',
    desc: 'Relational database',
    color: 'text-[#60a3d9]',
  },
  {
    Icon: SiMongodb,
    label: 'MongoDB',
    desc: 'Database',
    color: 'text-[#47a248]',
  },
  {
    Icon: FaReact,
    label: 'React',
    desc: 'Framework',
    color: 'text-[#61dafb]',
  },
  {
    Icon: SiTailwindcss,
    label: 'TailwindCSS',
    desc: 'User Interface',
    color: 'text-[#38bdf8]',
  },
  {
    Icon: SiTypescript,
    label: 'TypeScript',
    desc: 'Superset of JavaScript',
    color: 'text-[#3178c6]',
  },
  {
    Icon: FaGitAlt,
    label: 'Git',
    desc: 'Version Control',
    color: 'text-[#f1502f]',
  },
  {
    Icon: SiBootstrap,
    label: 'Bootstrap',
    desc: 'CSS Framework',
    color: 'text-[#7952b3]',
  },
  {
    Icon: FaGithub,
    label: 'Github',
    desc: 'Code versioning',
    color: 'text-white',
  },
];

const Skill = () => {
  return (
    <section className='pt-28 lg:pt-32 max-w-[1100px] mx-auto'>
      <div className='max-lg:mx-4'>
        <h2 className='bg-gradient-to-r from-[#dfdddd] to-[#58585e] bg-clip-text text-transparent text-3xl lg:text-4xl lg:leading-tight font-bold'>
          Tecnologias & Tools
        </h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Ferramentas e tecnologias que utilizo para criar projetos e
          aplicativos com o melhor desempenho possível.
        </p>

        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillItem.map(({ Icon, label, desc, color }, key) => (
            <SkillCard
              key={key}
              Icon={<Icon className={color} />}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
