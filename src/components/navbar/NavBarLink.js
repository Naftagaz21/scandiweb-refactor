import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { setCategory } from "../../redux/actions/categoryActions";
import "./navbarComponents.css";
class NavBarLink extends Component {
  render() {
    return (
      <Link
        className={
          this.props.active ? "navbar-link active-category" : "navbar-link"
        }
        to={"/"}
        onClick={() => {
          this.props.setCategory(this.props.name);
        }}>
        {this.props.name}
      </Link>
    );
  }
}

export default connect(null, { getProducts, setCategory })(NavBarLink);
