// styles
import styles from './ImageBlock.module.scss';

type Props = {
  imgUrl: string;
  imgAlt: string;
};

const ImageBlock: React.FC<Props> = ({ imgUrl, imgAlt }) => {
  return (
    <section className={styles.block}>
      <img src={imgUrl} alt={imgAlt} />
    </section>
  );
};

export default ImageBlock;
