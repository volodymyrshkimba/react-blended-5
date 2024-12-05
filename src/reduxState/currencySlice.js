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
    rates: [],
    list: [],
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
