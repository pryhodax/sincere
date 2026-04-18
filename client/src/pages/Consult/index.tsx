import React from 'react';

// styles
import styles from './Consult.module.scss';

// components
import HeroBlock from '@/components/sections/HeroBlock';
import LinkButton from '@/components/ui/buttons/LinkButton';

// images
import heroImg from '@/assets/images/consult-header-section.webp';

const steps = [
  {
    title: 'Free consultation',
    desc: 'Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.',
  },
  {
    title: 'Personalized Case Evaluation',
    desc: 'If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.',
  },
  {
    title: 'Formal Engagement & Representation',
    desc: 'Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.',
  },
];

const ConsultPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <HeroBlock title="Let us help you" height={750} imgUrl={heroImg} imgAlt="Let us help you" />
      <section className={styles.steps}>
        <div className="container">
          <div className={styles.steps__wrapper}>
            <div className={styles.steps__main}>
              <h2>Ready to Take the Next Step? Let's Discuss</h2>
              <div className={styles.steps__main__list}>
                {steps.map(({ title, desc }, idx) => (
                  <div className={styles.steps__main__list__item}>
                    <span>{idx + 1}.</span>
                    <div className={styles.steps__main__list__item__text}>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.steps__footer}>
              <h2>Discover how we can help</h2>
              <LinkButton to="/schedule-a-consult" variant="secondary">
                Schedule a Consult
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultPage;
