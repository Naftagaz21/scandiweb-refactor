import React, { Component } from "react";
import { connect } from "react-redux";
import CurrencyModal from "./CurrencyModal";

class CurrencyOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <div
        style={{
          color: "#1D1F22",
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "29px",
        }}
        className="currency-option-wrapper"
        onClick={(e) => {
          e.stopPropagation();
          this.setActive();
        }}>
        <span>{this.props.selectedCurrency.symbol}</span>
        <span>
          <i
            className={
              this.state.isActive ? "fa fa-angle-up" : "fa fa-angle-down"
            }
          />
        </span>

        <div className="currency-modal">
          <CurrencyModal
            show={this.state.isActive}
            selectedCurrency={this.props.selectedCurrency}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selectedCurrency,
});

export default connect(mapStateToProps)(CurrencyOptions);
