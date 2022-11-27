import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProcuctsByCategory($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        inStock
        gallery
        brand
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query ProductDetails($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      description
      category
      brand
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
