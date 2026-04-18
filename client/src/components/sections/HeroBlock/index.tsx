import React from 'react';

// styles
import styles from './HeroBlock.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  text?: string;
  imgUrl: string;
  imgAlt: string;
  height: number;
};

const HeroBlock: React.FC<Props> = ({ title, subtitle, text, imgUrl, imgAlt }) => {
  const showHeroText = subtitle && text;
  const showOnlyTitle = subtitle && !text;

  return (
    <section className={styles.hero}>
      <img src={imgUrl} alt={imgAlt} />
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__text}>
            {title && <p className="display1">{title}</p>}

            {showHeroText && (
              <div className={styles.hero__text__footer}>
                <h1>{subtitle}</h1>
                <p>{text}</p>
              </div>
            )}

            {showOnlyTitle && <h1>{subtitle}</h1>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
