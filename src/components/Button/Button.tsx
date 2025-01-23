import PropTypes from 'prop-types';

interface ButtonPrimaryProps {
  href?: string;
  target?: string;
  label: string;
  icon?: React.ReactNode;
  classes?: string;
}

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '',
}: ButtonPrimaryProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </a>
    );
  } else {
    return (
      <button className={classes}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node,
  classes: PropTypes.string,
};

export { ButtonPrimary };
