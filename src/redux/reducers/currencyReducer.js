const initState = {
  currencies: [],
  selectedCurrency: {},
};

export const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CURRENCIES":
      return {
        ...state,
        currencies: action.payload.currencies,
        selectedCurrency: action.payload.selectedCurrency,
      };
    case "SET_CURRENCY":
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    default:
      return state;
  }
};
