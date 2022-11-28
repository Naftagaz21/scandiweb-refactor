import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as CartIcon } from "../../static/Cart_icon.svg";
import MiniCartModal from "./MiniCartModal";

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: null, itemCount: 0 };
    this.calculateItemCount = this.calculateItemCount.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  calculateItemCount() {
    let itemCount = 0;
    if (this.props.items.length > 0) {
      this.props.items.forEach((item) => {
        itemCount += item.count;
      });
    }
    this.setState({
      itemCount: itemCount,
    });
  }

  componentDidMount() {
    this.calculateItemCount();
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.calculateItemCount();
    }
  }

  setActive() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <span
              style={
                this.state.itemCount > 0
                  ? {
                      width: "20px",
                      height: "20px",
                      position: "absolute",
                      top: "12px",
                      right: "86px",
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      fontSize: "14px",
                      background: "#1D1F22",
                      borderRadius: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }
                  : { display: "none" }
              }
            >
              {this.state.itemCount}
            </span>
          </div>
          <CartIcon
            onClick={this.setActive}
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>
        <MiniCartModal show={this.state.isActive} toggleCart={this.setActive} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartItems.items,
});

export default connect(mapStateToProps)(MiniCart);
