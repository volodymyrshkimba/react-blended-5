import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'DIEtb1cRoAZvncEvnH2N8KIhyyMEDaEA' },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async baseCurrency => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};

export const currencyList = async () => {
  const { data } = await axios.get(
    'https://api.apilayer.com/currency_data/list',
    { headers: { apikey: '0GwQ3KpfD8lfEolFnC4lCOm7Gv8z9C9d' } },
  );
  return Object.entries(data.currencies);
};
