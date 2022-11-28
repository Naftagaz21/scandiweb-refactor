import React, { Component } from "react";
import { connect } from "react-redux";

class MiniCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, itemCount: 0 };
  }

  calculateTotal() {
    let totalItems = 0;
    let totalAmount = 0;

    this.props.items.forEach((item) => {
      let price = item.prices.filter(
        (price) => price.currency.symbol === this.props.selectedCurrency.symbol
      )[0];
      totalItems += item.count;
      totalAmount += price.amount * item.count;
    });

    totalAmount = (totalAmount + totalAmount * 0.21).toFixed(2);

    this.setState({
      total: totalAmount,
      itemCount: totalItems,
    });
  }

  componentDidMount() {
    this.calculateTotal();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedCurrency !== prevProps.selectedCurrency ||
      this.props.items !== prevProps.items
    ) {
      this.calculateTotal();
    } else if (this.props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  render() {
    return (
      <div
        className={
          this.props.show
            ? "mini-cart-modal-container"
            : "mini-cart-modal-container hidden"
        }
        onClick={(e) => {
          e.stopPropagation();
          this.props.toggleCart();
        }}
      >
        <div
          className="modal-main-container"
          onClick={(e) => e.stopPropagation()}
        >
          <section
            style={{
              gap: "32px",
              marginLeft: "16px",
              marginRight: "16px",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: "160%",
              }}
            >
              <span style={{ fontWeight: "700" }}> My Bag, </span>
              {this.props.items.length} items
            </p>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartItems.items,
  selectedCurrency: state.currencies.selectedCurrency,
});

export default connect(mapStateToProps)(MiniCartModal);
