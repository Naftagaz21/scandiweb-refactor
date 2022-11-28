import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartActions";
import DOMPurify from "dompurify";
import "./products.css";
class ProductAttributes extends Component {
  addToCart = (product) => {
    if (product.inStock) {
      if (
        product.selectedAttributes === undefined &&
        this.props.product.attributes.length !== 0
      ) {
        let alertMessage = "Please select:";
        this.props.product.attributes.forEach((entry) => {
          alertMessage === "Please select:"
            ? (alertMessage = alertMessage.concat(" ", entry.name))
            : (alertMessage = alertMessage.concat(", ", entry.name));
        });
        alert(alertMessage + "!");
      } else if (
        this.props.product.attributes.length !== 0 &&
        Object.keys(product.selectedAttributes).length !==
          this.props.product.attributes.length
      ) {
        let alertMessage = "Please select:";
        this.props.product.attributes.forEach((entry) => {
          if (
            product.selectedAttributes === undefined ||
            !(entry.name in product.selectedAttributes)
          ) {
            alertMessage === "Please select:"
              ? (alertMessage = alertMessage.concat(" ", entry.name))
              : (alertMessage = alertMessage.concat(", ", entry.name));
          }
        });
        alert(alertMessage + "!");
      } else {
        this.props.addProductToCart({
          ...product,
          count: 1,
        });
        alert("Successfully added to cart!");
      }
    }
  };

  render() {
    let selectedCurrency = this.props.product.prices.filter(
      (price) => price.currency.symbol === this.props.selectedCurrency.symbol
    )[0];
    let product = this.props.product;
    return (
      <div className="product-attributes">
        {this.props.product.attributes.length > 0 &&
          this.props.product.attributes.map((attribute, i) => {
            return (
              <div className="attribute" key={"item-attribute-" + i}>
                <p className="attribute-label">{attribute.name}:</p>
                <div className="attribute-container">
                  {attribute.items.length > 0 &&
                    attribute.items.map((item, i) => {
                      return (
                        <button
                          key={i + "-attribute-" + i}
                          className={
                            this.props.product.selectedAttributes &&
                            Object.keys(
                              this.props.product.selectedAttributes
                            ).includes(attribute.name) &&
                            this.props.product.selectedAttributes[
                              attribute.name
                            ] === item.value
                              ? attribute.type === "swatch"
                                ? "product-attribute-button swatch active"
                                : "product-attribute-button active"
                              : attribute.type === "swatch"
                              ? "product-attribute-button swatch"
                              : "product-attribute-button"
                          }
                          onClick={() => {
                            this.props.selectAttributes(
                              attribute.name,
                              item.value
                            );
                          }}
                          style={
                            attribute.type === "swatch"
                              ? {
                                  backgroundColor: item.value,
                                  color: item.value,
                                }
                              : {}
                          }
                        >
                          {attribute.type === "swatch" ? "" : item.value}
                        </button>
                      );
                    })}
                </div>
              </div>
            );
          })}
        <p className="attribute-label">Price:</p>

        {/* TODO PRICES */}
        <p className="product-price">
          {selectedCurrency.currency.symbol}
          {selectedCurrency.amount}
        </p>

        <div className="add-to-cart-button-container">
          <button
            className={
              this.props.product.inStock
                ? "add-to-cart-button"
                : "add-to-cart-button out-of-stock-button"
            }
            onClick={this.addToCart.bind(this, product)}
          >
            <span
              className={
                this.props.product.inStock
                  ? "add-to-cart-button-text"
                  : "out-of-stock-text"
              }
            ></span>
          </button>
        </div>

        <div className="product-description">
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(this.props.product.description),
            }}
          ></p>
        </div>
      </div>
    );
  }
}

// TODO: remove cartItems
const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selectedCurrency,
  cartItems: state.cartItems.items,
});

export default connect(mapStateToProps, { addProductToCart })(
  ProductAttributes
);
