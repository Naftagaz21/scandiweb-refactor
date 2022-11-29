import React, { Component } from "react";
import "./cartComponents.css";

export default class CartItemAttributes extends Component {
  render() {
    console.log(this.props);
    let itemPrice = this.props.item.prices.filter(
      (price) => price.currency.symbol === this.props.selectedCurrency.symbol
    )[0];
    console.log(this.props, itemPrice);
    return (
      <div className="cart-item-attributes">
        <div className="cart-item-text-attributes">
          <p className={this.props.isMiniCart ? "minicart-title" : ""}>
            {this.props.item.brand}
          </p>
          <p className={this.props.isMiniCart ? "minicart-title" : ""}>
            {this.props.item.name}
          </p>
          <p className={this.props.isMiniCart ? "minicart-price" : ""}>
            {itemPrice.currency.symbol}
            {itemPrice.amount}
          </p>
        </div>
        <div>
          {/*this.props.item.attributes.forEach((attribute) => {
            attribute.type === "swatch";
          })*/}
        </div>
      </div>
    );
  }
}
