import { createSelector } from '@reduxjs/toolkit';

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectLoading = state => state.currency.isLoading;
export const selectError = state => state.currency.isError;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectRates = state => state.currency.rates;
export const selectFilter = state => state.filter.value;
export const selectList = state => state.currency.list;
export const selectListLikeObject = createSelector([selectList], list => {
  return list.reduce((acc, [fir, sec]) => {
    acc[fir] = sec;
    return acc;
  }, {});
});
export const selectFilteredRates = createSelector(
  [selectRates, selectBaseCurrency, selectFilter],
  (rates, baseCurrency, filter) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filter.toLowerCase()),
      )
      .map(([key, value]) => ({ key, value: 1 / value }));
  },
);

export const selectFilteredRatesLikeObject = createSelector(
  [selectRates, selectBaseCurrency, selectFilter],
  (rates, baseCurrency, filter) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filter.toLowerCase()),
      )
      .reduce((acc, [key, value]) => {
        acc[key] = 1 / value;
        return acc;
      }, {});
  },
);
