// styles
import styles from './Footer.module.scss';

// images
import Logo from '@/assets/icons/logo.svg?react';

const about = [
  { type: 'contact', title: 'hello@figma.com', href: 'mailto:hello@figma.com' },
  { type: 'contact', title: '(555) 123-4567', href: 'tel:+15551234567' },
  { type: 'address', title: '123 Candyland Lane\nSuite 123\nLos Angeles, CA 94117', href: '' },
  { type: 'social', title: 'Instagram', href: 'https://instagram.com' },
  { type: 'social', title: 'Facebook', href: 'https://facebook.com' },
  { type: 'social', title: 'Linkedin', href: 'https://linkedin.com' },
  { type: 'social', title: 'Bluesky', href: 'https://bluesky.com' },
];

const Footer: React.FC = () => {
  const contacts = about.filter((i) => i.type === 'contact');
  const socials = about.filter((i) => i.type === 'social');
  const address = about.find((i) => i.type === 'address');

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <Logo />
            <p className="display3">Jones & Brown Legal</p>
          </div>

          <p>Deep expertise, decisive courtroom presence</p>

          <div className={styles.footer__about}>
            <div className={styles.footer__about__block}>
              {contacts.map(({ title, href }, idx) => (
                <a className="link" href={href} key={idx}>
                  {title}
                </a>
              ))}
            </div>

            <div className={styles.footer__about__block}>
              <p>{address?.title}</p>
            </div>

            <div className={styles.footer__about__block}>
              {socials.map(({ title, href }, idx) => (
                <a className="link" href={href} target="_blank" rel="noopener noreferrer" key={idx}>
                  {title}
                </a>
              ))}
            </div>
          </div>

          <p className={styles.footer__rights}>
            Jones & Brown Legal
            <br /> © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
