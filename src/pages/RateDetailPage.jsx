import RatesDetail from 'components/RatesDatail/RatesDetail';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectBaseCurrency,
  selectFilteredRatesLikeObject,
  selectListLikeObject,
} from 'reduxState/selectors';

const RateDetailPage = () => {
  const { rateName } = useParams();
  const filteredRates = useSelector(selectFilteredRatesLikeObject);
  const list = useSelector(selectListLikeObject);
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <RatesDetail
      baseCurrency={baseCurrency}
      list={list}
      filteredRates={filteredRates}
      rateName={rateName}
    />
  );
};

export default RateDetailPage;
