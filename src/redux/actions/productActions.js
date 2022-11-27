import makeQuery from "../../graphql";
import {
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_BY_ID,
} from "../../graphql/queries";

export const getProducts = (categoryName) => async (dispatch) => {
  let data = await makeQuery(GET_PRODUCTS_BY_CATEGORY, {
    input: { title: categoryName },
  });

  dispatch({
    type: "GET_PRODUCTS_BY_CATEGORY",
    payload: {
      products: data.category.products,
    },
  });
};

// TODO: seems as if im not using this anywhere
// check this
export const getProductById = (id) => async (dispatch) => {
  let data = await makeQuery(GET_PRODUCT_BY_ID, {
    input: { id },
  });

  dispatch({
    type: "GET_PRODUCT_BY_ID",
  });
};
