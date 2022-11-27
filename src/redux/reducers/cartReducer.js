const initState = {
  items: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADDED_PRODUCT_TO_CART":
      if (
        state.items.some(
          (item) =>
            item.id === action.payload.id &&
            JSON.stringify(item.selectedAttributes) ===
              JSON.stringify(action.payload.selectedAttributes)
        )
      ) {
        let items = state.items.map((item, i) =>
          item.id === action.payload.id &&
          JSON.stringify(item.selectedAttributes) ===
            JSON.stringify(action.payload.selectedAttributes)
            ? { ...item, count: item.count + 1 }
            : item
        );
        return {
          items: [...items],
        };
      } else {
        return {
          items: [...state.items, action.payload],
        };
      }

    case "INCREASE_PRODUCT_COUNT_CART":
      let items = state.items.map((item) =>
        item.id === action.payload.id &&
        JSON.stringify(item.selectedAttributes) ===
          JSON.stringify(action.payload.selectedAttributes)
          ? { ...item, count: item.count + 1 }
          : item
      );
      return { items: [...items] };

    case "DECREASE_PRODUCT_COUNT_CART":
      if (action.payload.count <= 1) {
        let items = state.items.filter(
          (item) =>
            item.id !== action.payload.id ||
            (item.id === action.payload.id &&
              JSON.stringify(item.selectedAttributes) !==
                JSON.stringify(action.payload.selectedAttributes))
        );
        return { items: [...items] };
      } else {
        let items = state.items.map((item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.selectedAttributes) ===
            JSON.stringify(action.payload.selectedAttributes)
            ? { ...item, count: item.count - 1 }
            : item
        );
        return { items: [...items] };
      }

    default:
      return state;
  }
};
