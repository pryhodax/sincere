import React from 'react';

// styles
import styles from './Services.module.scss';

// components
import HeroBlock from '@/components/sections/HeroBlock';
import ImageBlock from '@/components/sections/ImageBlock';

// images
import heroImg from '@/assets/images/servicespage-header-section.webp';
import secondImg from '@/assets/images/servicespage-second.webp';

const stats = [
  { statTitle: '30+', desc: 'years of experience' },
  { statTitle: '98%', desc: 'success rate in court' },
  { statTitle: '120+', desc: 'attorneys at hand' },
];

const services = [
  {
    title: 'Business and Corporate Law',
    desc: 'Business formation (LLCs, corporations, partnerships)\nContract drafting and review\nMergers and acquisitions\nIntellectual property protection\nEmployment law and workplace policies\nCorporate governance\nShareholder and partnership disputes',
  },
  {
    title: 'Litigation and Dispute Resolution',
    desc: 'Civil litigation\nCommercial litigation\nArbitration and mediation\nClass action lawsuits\nPersonal injury claims\nProduct liability cases',
  },
  {
    title: 'Family Law',
    desc: 'Divorce and separation\nChild custody and support\nPrenuptial and postnuptial agreements\nAdoption and surrogacy\nDomestic violence protection',
  },
  {
    title: 'Criminal Defense',
    desc: 'DUI and traffic offenses\nWhite-collar crime defense\nDrug charges\nAssault and battery cases\nExpungements and record sealing',
  },
  {
    title: 'Real Estate Law',
    desc: 'Property transactions (buying, selling, leasing)\nLandlord-tenant disputes\nZoning and land use\nConstruction law\nReal estate development',
  },
  {
    title: 'Immigration Law',
    desc: 'Visa applications\nGreen cards and citizenship\nDeportation defense\nEmployment-based immigration',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <HeroBlock
        subtitle="At Jones & Brown Legal, we are committed to exceptional service and successful outcomes with:"
        height={750}
        imgUrl={heroImg}
        imgAlt="Jones & Brown Legal Services"
      />
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.stats__wrapper}>
            {stats.map(({ statTitle, desc }, idx) => (
              <div className={styles.stats__item} key={idx}>
                <span>{statTitle}</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container">
          <div className={styles.services__wrapper}>
            <h2>Navigating Complex Legal Landscapes? We Can Help.</h2>
            <div className={styles.services__list}>
              {services.map(({ title, desc }) => (
                <div className={styles.services__list__item}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ImageBlock imgUrl={secondImg} imgAlt="#" />
    </div>
  );
};

export default ServicesPage;
