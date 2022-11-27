import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./products.css";

export default class ProductCard extends Component {
  render() {
    let productPrice = this.props.product.prices.filter(
      (price) => price.currency.symbol === this.props.selectedCurrency.symbol
    )[0];

    return (
      <Link
        to={`/product/${this.props.product.id}`}
        style={{
          textDecoration: "none",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}>
        <div
          className={this.props.product.inStock ? "card" : "card out-of-stock"}>
          <div className="card-img">
            <img src={this.props.product.gallery[0]} />
            <div
              className={
                this.props.product.inStock
                  ? "img-out-of-stock hidden"
                  : "img-out-of-stock"
              }>
              Out of stock
            </div>
          </div>

          <div className="card-header">
            <p>
              {this.props.product.brand} - {this.props.product.name}
            </p>
            <p
              style={{
                fontweight: "500",
                fontSize: "18px",
                lineHeight: "160%",
                textAlign: "right",
                color: "#1D1F22",
              }}>
              {productPrice.currency.symbol}
              {productPrice.amount}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}
