import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectExchangeInfo,
  selectLoading,
} from 'reduxState/selectors';

const Home = () => {
  const isError = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {loading && <Loader />}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
