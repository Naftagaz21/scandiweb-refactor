import React, { Component } from "react";
import makeQuery from "../../graphql";
import { GET_PRODUCT_BY_ID } from "../../graphql/queries";
import { withRouter } from "../routerUtil";
import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  async getProduct(id) {
    let data = await makeQuery(GET_PRODUCT_BY_ID, {
      id,
    });
    this.setState({
      product: data.product,
    });
  }

  componentDidMount() {
    const id = this.props.router.params.id;
    this.getProduct(id);
  }

  render() {
    if (this.state.product === null)
      return (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}>
          <p
            style={{
              fontSize: "46px",
            }}>
            Error occured when loading product.
          </p>
        </div>
      );

    return (
      <div
        style={{
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}>
        <ProductCarousel
          key={this.state.product.name}
          gallery={this.state.product.gallery}
        />
        <ProductDetails product={this.state.product} />
      </div>
    );
  }
}

export default withRouter(ProductPage);
