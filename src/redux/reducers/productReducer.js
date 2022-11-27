const initState = {
  products: [],
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
