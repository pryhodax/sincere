import React from 'react';
import clsx from 'clsx';

// styles
import styles from './Home.module.scss';

// components
import HeroBlock from '@/components/sections/HeroBlock';
import LinkButton from '@/components/ui/buttons/LinkButton';
import ImageBlock from '@/components/sections/ImageBlock';

// images
import heroImg from '@/assets/images/homepage-header-section.webp';
import secondImg from '@/assets/images/homepage-second.webp';
import thirdImg from '@/assets/images/homepage-third.webp';
import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import ArrowRight from '@/assets/icons/arrow-right.svg?react';

const offerList = [
  'Business formation',
  'Contract drafting',
  'Mergers and Acquisitions',
  'Property Protection',
  'Employment Law',
  'Corporate Governance',
  'Shareholder Disputes',
  '+More',
];

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <HeroBlock
        title="Jones & Brown Legal"
        subtitle="Deep expertise, decisive courtroom presence"
        text="We've been serving the Los Angeles area with expert legal counsel since 1976."
        height={800}
        imgUrl={heroImg}
        imgAlt="Jones & Brown Legal"
      />
      <section className={styles.welcome}>
        <div className="container">
          <div className={styles.welcome__wrapper}>
            <div className={styles.welcome__text}>
              <h1>Welcome to Jones & Brown Legal</h1>
              <div className={styles.welcome__text__info}>
                <p>
                  Jones & Brown Legal has been a pillar of the Los Angeles legal community, providing expert legal
                  counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted
                  advisors, dedicated advocates, and strategic partners committed to achieving the best possible
                  outcomes for our clients.
                </p>
                <p>
                  We combine decades of experience with a deep understanding of the complexities of California law. Our
                  team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los
                  Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of
                  law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.
                </p>
              </div>
            </div>
            <LinkButton to="/schedule-a-consult" variant="primary">
              Schedule a Consult
            </LinkButton>
          </div>
        </div>
      </section>
      <ImageBlock imgUrl={secondImg} imgAlt="#" />
      <section className={styles.offer}>
        <div className="container">
          <div className={styles.offer__wrapper}>
            <h1>What We Offer</h1>
            <div className={styles.offer__text}>
              <div className={styles.offer__text__list}>
                {offerList.map((item, idx) => (
                  <p className="display2" key={idx}>
                    {item}
                  </p>
                ))}
              </div>
              <LinkButton to="/services" variant="secondary">
                Services
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <div className="container">
          <div className={styles.reviews__wrapper}>
            <div className={styles.reviews__main}>
              <div className={styles.reviews__main__title}>
                <h1>Hear From Our Clients</h1>
                <p>
                  We believe that our clients' experiences speak volumes about the quality of our legal services. Here's
                  what some of them have to say:
                </p>
              </div>
              <div className={styles.reviews__main__swiper}>
                <div className={styles.reviews__main__swiper__content}>
                  <h1>
                    "Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to
                    my concerns and made the process clear and straightforward. I now have complete peace of mind
                    knowing my family's future is secure."
                  </h1>
                  <h1>— David L., Business Owner</h1>
                </div>
                <div className={styles.reviews__main__swiper__controls}>
                  <button>
                    <ArrowLeft />
                  </button>
                  <div className={styles.reviews__main__swiper__controls__dots}>
                    {[...Array(4)].map((_, idx) => (
                      <span
                        key={idx}
                        className={clsx({
                          [styles.active]: idx === 0,
                        })}
                      />
                    ))}
                  </div>
                  <button>
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <p>
                Let us help you navigate your legal journey with confidence and peace of mind. Contact Jones & Brown
                Legal today.
              </p>
            </div>
            <LinkButton to="/schedule-a-consult" variant="primary">
              Schedule a Consult
            </LinkButton>
          </div>
        </div>
      </section>
      <ImageBlock imgUrl={thirdImg} imgAlt="#" />
    </div>
  );
};

export default HomePage;
