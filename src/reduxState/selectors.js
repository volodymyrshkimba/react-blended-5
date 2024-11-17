import { createSelector } from '@reduxjs/toolkit';

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectLoading = state => state.currency.isLoading;
export const selectError = state => state.currency.isError;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectRates = state => state.currency.rates;
export const selectFilteredRates = createSelector(
  [selectRates, selectBaseCurrency],
  (rates, baseCurrency) => {
    return rates
      .filter(([key]) => key !== baseCurrency)
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
