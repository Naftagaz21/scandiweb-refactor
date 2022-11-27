import React, { Component } from "react";
import ProductAttributes from "./ProductAttributes";
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.productSelectAttributes = this.productSelectAttributes.bind(this);
    this.state = {
      product: this.props.product,
    };
  }

  productSelectAttributes(attributeName, value) {
    let productState = { ...this.state.product };
    let newAttribute = { [attributeName]: value };
    console.log("productSelectAttribute trigger", newAttribute);
    if (Object.keys(productState).includes("selectedAttributes")) {
      productState = {
        ...productState,
        selectedAttributes: {
          ...productState.selectedAttributes,
          ...newAttribute,
        },
      };
    } else {
      productState = {
        ...productState,
        selectedAttributes: { ...newAttribute },
      };
    }

    this.setState({ product: productState });
  }

  render() {
    return (
      <div>
        <div
          style={{
            fontSize: "30px",
            lineHeight: "27px",
          }}>
          <p style={{ fontWeight: "600" }}>{this.props.product.brand}</p>
          <p style={{ fontWeight: "400" }}>{this.props.product.name}</p>
        </div>
        <ProductAttributes
          product={this.state.product}
          selectAttributes={this.productSelectAttributes}
        />
      </div>
    );
  }
}
