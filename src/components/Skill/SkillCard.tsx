//PROP
import PropTypes from 'prop-types';
//REACT MODULE
import { ReactNode } from 'react';

interface SkillCardProps {
  Icon: ReactNode;
  label: string;
  desc: string;
  classes?: string;
}

const SkillCard = ({ Icon, label, desc }: SkillCardProps) => {
  return (
    <div className='flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-lg p-3 hover:bg-zinc-800 transition-colors group cursor-pointer'>
      <div className='items-center flex justify-center text-2xl bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
        {Icon}
      </div>
      <div className='flex flex-col'>
        <h3>{label}</h3>
        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  Icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
