import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  odds: [],
  evens: [],
  bank: [],
};

function sort(number) {
  if (number % 2 === 0) {
    state.evens.push(number);
  } else {
    state.odds.push(number);
  }
}

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    addNumber: (state, { payload }) => {
      state.bank.push(payload);
    },
    sortOne: (state) => {
      const firstNumber = state.bank.shift();
      if (firstNumber) {
        sort(firstNumber);
      }
    },
    sortAll: (state) => {
      state.bank.forEach(sort);
      state.bank = [];
    },
  },
});
export const { addNumber, sortOne, sortAll } = sortingSlice.actions;

export const selectOdds = (store) => store.sorting.odds;
export const selectEvens = (store) => store.sorting.evens;
export const selectBank = (store) => store.sorting.bank;

const sortingReducer = sortingSlice.reducer;
export default sortingReducer;
