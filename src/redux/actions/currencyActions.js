import makeQuery from "../../graphql";
import { GET_CURRENCIES } from "../../graphql/queries";

export const getCurrencies = () => async (dispatch) => {
  let data = await makeQuery(GET_CURRENCIES);

  dispatch({
    type: "GET_CURRENCIES",
    payload: {
      currencies: data.currencies,
      selectedCurrency: data.currencies[0],
    },
  });
};

export const setSelectedCurrency = (selectedCurrency) => (dispatch) => {
  dispatch({
    type: "SET_CURRENCY",
    payload: selectedCurrency,
  });
};
