import makeQuery from "../../graphql";
import { GET_CATEGORIES } from "../../graphql/queries";
import { getProducts } from "./productActions";

export const getCategories = () => async (dispatch) => {
  let data = await makeQuery(GET_CATEGORIES);
  const action = {
    type: "GET_ALL_CATEGORIES",
    payload: {
      categories: data.categories,
      selectedCategory: data.categories[0].name,
    },
  };

  dispatch(action);
};

export const setCategory = (categoryName) => async (dispatch) => {
  dispatch(getProducts(categoryName));

  dispatch({
    type: "SET_CATEGORY",
    payload: {
      selectedCategory: categoryName,
    },
  });
};
