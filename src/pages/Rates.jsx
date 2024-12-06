import { Wave } from 'react-animated-text';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchList, fetchRates } from 'reduxState/operations';
import {
  selectBaseCurrency,
  selectError,
  selectFilteredRates,
  selectLoading,
  selectRates,
} from 'reduxState/selectors';

const Rates = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const baseCurrency = useSelector(selectBaseCurrency);
  const filteredRates = useSelector(selectFilteredRates);
  const rates = useSelector(selectRates);

  useEffect(() => {
    //  dispatch(fetchRates(baseCurrency));
    //  dispatch(fetchList());
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter />}
        {loading && <Loader />}
        {filteredRates.length !== 0 && <RatesList rates={filteredRates} />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
