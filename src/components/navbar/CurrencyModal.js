import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/actions/currencyActions";
import CurrencyModalItem from "./CurrencyModalItem";

class CurrencyModal extends Component {
  constructor(props) {
    super(props);
    this.props.getCurrencies();
  }
  render() {
    return (
      <div
        className={
          this.props.show
            ? "currency-modal-container"
            : "currency-modal-container hidden"
        }>
        <div className="currency-main-modal">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "115px",
              marginTop: "4px",
              marginBottom: "4px",
            }}>
            {this.props.currencies.length > 0 &&
              this.props.currencies.map((currency, i) => {
                return (
                  <CurrencyModalItem
                    key={"currency-item-" + i}
                    currency={currency}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selectedCurrency,
  currencies: state.currencies.currencies,
});

export default connect(mapStateToProps, { getCurrencies })(CurrencyModal);
