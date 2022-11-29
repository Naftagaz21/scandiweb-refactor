import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemAttributes from "../cart/CartItemAttributes";

export default class MiniCartItem extends Component {
  render() {
    return (
      <div className="minicart-item">
        <div className="minicart-item-attributes">
          <CartItemAttributes
            item={this.props.item}
            selectedCurrency={this.props.selectedCurrency}
            isMiniCart={true}
          />
        </div>
        <div className="minicart-item-gallery"></div>
      </div>
    );
  }
}
