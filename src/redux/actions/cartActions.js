import makeQuery from "../../graphql";

export const addProductToCart = (product) => (dispatch) => {
  dispatch({
    type: "ADDED_PRODUCT_TO_CART",
    payload: product,
  });
};

export const increaseProductInCart = (product) => (dispatch) => {
  dispatch({
    type: "INCREASE_PRODUCT_COUNT_CART",
    payload: product,
  });
};

export const decreaseProductInCart = (product) => (dispatch) => {
  dispatch({
    type: "DECREASE_PRODUCT_COUNT_CART",
    payload: product,
  });
};
