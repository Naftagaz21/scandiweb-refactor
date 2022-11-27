import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "./products/ProductCard";
import "./products/products.css";

class ProductList extends Component {
  render() {
    console.log("PRODUCTLIST", this.props);
    return (
      <div
        className="product-list-page"
        style={{
          boxSizing: "border-box",
          marginRight: "6rem",
          marginLeft: "6rem",
        }}>
        <div>
          <p
            style={{
              marginTop: "80px",
              marginBottom: "80px",
              fontWeight: "400",
              fontSize: "42px",
              lineHeight: "160%",
              textTransform: "uppercase",
            }}>
            {this.props.selectedCategory}
          </p>
        </div>
        <div className="product-list-grid">
          {this.props.products.length > 0 &&
            this.props.products.map((product) => {
              return (
                <ProductCard
                  key={"product-card-" + product.name}
                  product={product}
                  selectedCurrency={this.props.selectedCurrency}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  selectedCurrency: state.currencies.selectedCurrency,
  selectedCategory: state.categories.selectedCategory,
});

export default connect(mapStateToProps, null)(ProductList);
