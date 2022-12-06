import React from "react";
import { connect } from "react-redux";
import { addCard } from "../../redux/actions";
import { deleteProduct } from "../../redux/actions/actions.js";
import "./card.css";

export function Card({ name, price, id, deleteProduct }) {
  function handleDelete() {
    deleteProduct(id);
  }

  return (
    <div className="cardBg">
      <h5>{name}: </h5>
      <h5>${price}</h5>
      <button className="cardBtn" onClick={handleDelete} >X</button>
    </div>
  );
}

export function mapDispatchToProps(dispatch){
  return {
    addCard: (id) => dispatch(addCard(id)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
}
export default connect(null, mapDispatchToProps)(Card);
