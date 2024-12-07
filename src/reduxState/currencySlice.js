import { createSlice } from '@reduxjs/toolkit';
import {
  fatchBaseCurrency,
  fetchExchangeCurrency,
  fetchList,
  fetchRates,
} from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [
      ['AED', '0.813399'],
      ['AFN', '0.72007'],
      ['ALL', '107.346001'],
      ['AMD', '0.12444'],
      ['UAH', '41.08889'],
    ],
    list: [
      ['AED', 'United Arab Emirates Dirham'],
      ['AFN', 'Afghan Afghani'],
      ['ALL', 'Albanian Lek'],
      ['AMD', 'Armenian Dram'],
      ['USD', 'United States Dollar'],
    ],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fatchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fatchBaseCurrency.rejected, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.exchangeInfo = null;
      })
      .addCase(fetchRates.pending, state => {
        state.isLoading = true;
        state.isError = null;
        state.rates = [];
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.rates = [];
      })
      .addCase(fetchList.pending, state => {
        state.isLoading = true;
        state.isError = null;
        state.list = [];
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.list = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.list = [];
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
