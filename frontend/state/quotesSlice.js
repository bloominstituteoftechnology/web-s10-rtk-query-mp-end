import { createSlice } from '@reduxjs/toolkit'

let id = 1
export const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    setHighlightedQuote(state, action) {
      if (state.highlightedQuote === action.payload) {
        state.highlightedQuote = null
      } else {
        state.highlightedQuote = action.payload
      }
    },
  }
})

export const {
  setHighlightedQuote,
  toggleVisibility,
} = quotesSlice.actions

export default quotesSlice.reducer
