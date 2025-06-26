// IMPORT IMG'S
import project1 from '../../../public/work/ecoleaf-project.png';
import project2 from '../../../public/work/weather-forecast.png';
import project3 from '../../../public/work/films-lib.png';
import project4 from '../../../public/work/github-locator.png';
import project5 from '../../../public/work/cristal-terapias.png';
import project6 from '../../../public/work/e-commerce.png';

// COMPONENTS
import ProjectCard from './ProjectCard';

interface Works {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
}

const worksItem: Works[] = [
  {
    imgSrc: project1,
    title: 'Ecoleaf Project',
    tags: ['Node.js', 'Bootstrap', 'CRUD'],
    projectLink: 'https://github.com/vbzt/EcoLeaf',
  },
  {
    imgSrc: project3,
    title: 'Films Lib',
    tags: ['API', 'React & Vite', 'JSX'],
    projectLink: 'https://films-lib-hazel.vercel.app',
  },

  {
    imgSrc: project5,
    title: 'Luciane Rigobello',
    tags: ['Development', 'React', 'Tailwind'],
    projectLink: 'https://lucianerigobello.com.br',
  },
  {
    imgSrc: project2,
    title: 'Weather Forecast',
    tags: ['API', 'React & Vite', 'Development'],
    projectLink: 'https://guilherme-rigobello.github.io/weather-forecast/',
  },
  {
    imgSrc: project4,
    title: 'Github Locator',
    tags: ['API', 'React', 'Typescript'],
    projectLink: 'https://guilherme-rigobello.github.io/github-locator/',
  },

  {
    imgSrc: project6,
    title: 'Curve eCommerce',
    tags: ['React', 'Tailwind', 'E-Commerce'],
    projectLink: 'https://github.com/Guilherme-Rigobello/curve-ecommerce',
  },
];

const Work = () => {
  return (
    <section id='work' className='pt-28 lg:pt-32 max-w-[1100px] mx-auto'>
      <div className='max-lg:mx-4'>
        <h2 className='mb-8 bg-gradient-to-r from-[#dfdddd] to-[#58585e] bg-clip-text text-transparent text-3xl lg:text-4xl lg:leading-tight font-bold'>
          Portfolio & Repositórios
        </h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {worksItem.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
