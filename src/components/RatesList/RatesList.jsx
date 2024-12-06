import { Grid, GridItem } from 'components';
import styles from './RatesList.module.css';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/selectors';
import { Link, useLocation } from 'react-router-dom';

export const RatesList = ({ rates }) => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const location = useLocation();

  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <Link
          key={key}
          to={`/rates/${key}`}
          className={styles.active}
          state={location}
        >
          <GridItem>
            <p className={styles.text}>
              1 {key} = {value.toFixed(2)} {baseCurrency}
            </p>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
