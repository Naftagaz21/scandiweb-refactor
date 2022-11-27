import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedCurrency } from "../../redux/actions/currencyActions";

class CurrencyModalItem extends Component {
  render() {
    return (
      <div
        className="currency-option"
        style={{
          width: "100%",
        }}>
        <div
          style={{
            height: "45px",
          }}
          onClick={() => this.props.setSelectedCurrency(this.props.currency)}>
          <p
            style={{
              marginLeft: "20px",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "160%",
            }}>
            {this.props.currency.symbol} {this.props.currency.label}
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, { setSelectedCurrency })(CurrencyModalItem);
