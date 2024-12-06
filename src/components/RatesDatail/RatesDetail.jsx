import { Link, useLocation } from 'react-router-dom';
import styles from './RatesDetail.module.css';

const RatesDetail = ({ list, rateName, filteredRates, baseCurrency }) => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <Link className={styles.goBack} to={location.state || '/rates'}>
        GO BACK
      </Link>
      <div className={styles.box}>
        <p className={styles.title}>1</p>
        <p className={styles.accent}>{list[rateName]}</p>
        <p className={styles.titleAccent}>=</p>
        <p className={styles.title}>{filteredRates[rateName]}</p>
        <p className={styles.accent}>{list[baseCurrency]}</p>
      </div>
    </div>
  );
};

export default RatesDetail;
