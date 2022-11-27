import React, { Component } from "react";
import "./products.css";
export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.gallery[0],
    };
  }

  render() {
    const productImages = this.props.gallery.map((image, i) => {
      return (
        <img
          className="carousel-img"
          key={"carousel-img-" + i}
          src={image}
          alt="Product image"
          onClick={() => this.setState({ currentImage: image })}
        />
      );
    });
    return (
      <div className="product-images">
        <div className="product-carousel-container">{productImages}</div>
        <div className="product-img">
          <img src={this.state.currentImage} className="selected-img" />
        </div>
      </div>
    );
  }
}
