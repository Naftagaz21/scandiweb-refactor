const initState = {
  categories: [],
  selectedCategory: "",
};

export const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES":
      if (state.selectedCategory !== "") {
        return {
          ...state,
          categories: action.payload.categories,
        };
      } else {
        return {
          ...state,
          categories: action.payload.categories,
          selectedCategory: action.payload.selectedCategory,
        };
      }
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
      };

    default:
      return state;
  }
};
