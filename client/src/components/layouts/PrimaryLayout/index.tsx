import { Outlet } from 'react-router-dom';

// styles
import styles from './PrimaryLayout.module.scss';

// components
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

const PrimaryLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
