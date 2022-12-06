import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from "../Card/Card.jsx";

export function Products() {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>

        <div className="productsList">
          {list.map((product, index) => (
            <Card
              name={product.name}
              price={product.price}
              id={product.id}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    products: state.list,
  };
}

export default connect(mapStateToProps, null)(Products);
