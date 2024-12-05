import { Grid, GridItem } from 'components';
import styles from './RatesList.module.css';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/selectors';

export const RatesList = ({ rates }) => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value.toFixed(2)} {baseCurrency}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
