// ICON
import { FiArrowUpRight } from 'react-icons/fi';

//INTERFACE
interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
}

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
}: ProjectCardProps) => {
  return (
    <div className='relative p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700/50 active:bg-neutral-700/60 cursor-pointer ring-1 ring-inset ring-neutral-50/5 transition-colors'>
      <figure className='mb-4'>
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className='rounded-lg w-full h-[300px]'
        />
      </figure>

      <div className='flex items-center justify-between gap-4'>
        <div>
          <h3 className='text-[22px] font-semibold mb-3'>{title}</h3>
          <div className='flex flex-wrap items-center gap-2'>
            {tags.map((label, key) => (
              <span
                className='h-8 text-sm text-neutral-400 bg-neutral-50/5 grid items-center px-3 rounded-lg'
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          className='w-11 h-11 rounded-full grid place-items-center bg-green-800 text-neutral-200 hover:scale-110 transition-all'
        >
          <span aria-hidden='true' className='text-2xl'>
            <FiArrowUpRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
