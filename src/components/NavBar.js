import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories, setCategory } from "../redux/actions/categoryActions";
import { getCurrencies } from "../redux/actions/currencyActions";
import { ReactComponent as Logo } from "../static/a-logo.svg";
import CurrencyOptions from "./navbar/CurrencyOptions";
import MiniCart from "./navbar/MiniCart";
import NavBarLink from "./navbar/NavBarLink";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props
      .getCurrencies()
      .then(this.props.getCategories())
      .then(this.props.setCategory(this.props.selectedCategory));
  }
  render() {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          marginLeft: "100px",
          marginRight: "100px",
          height: "68px",
        }}
      >
        <div
          className="navbar-categories"
          style={{
            display: "flex",
            flex: 4,
            alignItems: "baseline",
            margin: "0 auto",
            paddingTop: "22px",
            gap: "22px",
          }}
        >
          {this.props.categories.length > 0 &&
            this.props.categories.map((category) => {
              return (
                <NavBarLink
                  key={"link-" + category.name}
                  name={category.name}
                  active={this.props.selectedCategory === category.name}
                />
              );
            })}
        </div>
        <div
          className="navbar-logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Logo
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div
          className="navbar-options"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 4,
            gap: "52px",
          }}
        >
          <CurrencyOptions />
          <MiniCart />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  selectedCategory: state.categories.selectedCategory,
});

export default connect(mapStateToProps, {
  getCategories,
  setCategory,
  getCurrencies,
})(NavBar);
