import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

// styles
import styles from './Header.module.scss';

// images
import Logo from '@/assets/icons/logo.svg?react';

const menu = [
  { title: 'Services', href: '/services' },
  { title: 'Schedule a Consult', href: '/schedule-a-consult' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(styles.header, {
        [styles.scrolled]: scrolled,
      })}
    >
      <div className="container">
        <div className={styles.header__wrapper}>
          <Link to="/" className={styles.header__logo}>
            <Logo />
          </Link>
          <nav className={styles.header__navigation}>
            {menu.map(({ title, href }, idx) => (
              <Link to={href} className="link" key={idx}>
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
