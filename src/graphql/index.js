import { apolloClient } from "..";

const makeQuery = async (query, args = {}) => {
  let data = null;
  await apolloClient
    .query({
      query: query,
      variables: args,
    })
    .then((result) => {
      data = result.data;
    });

  return data;
};

export default makeQuery;
