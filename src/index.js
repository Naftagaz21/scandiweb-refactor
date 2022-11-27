import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductPage from "./components/products/ProductPage";

const graphQlURI = "http://localhost:4000/";
export const apolloClient = new ApolloClient({
  uri: graphQlURI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="" element={<ProductList />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
