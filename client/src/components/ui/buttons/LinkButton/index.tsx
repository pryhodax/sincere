import { Link, LinkProps } from 'react-router-dom';

// styles
import styles from './LinkButton.module.scss';
import clsx from 'clsx';

type Props = LinkProps & {
  variant: 'primary' | 'secondary';
};

const LinkButton: React.FC<Props> = ({ variant, className, ...props }) => {
  return <Link {...props} className={clsx(styles.button, styles[`button__${variant}`], className)} />;
};

export default LinkButton;
