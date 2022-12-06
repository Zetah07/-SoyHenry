import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  render() {
  
    return (
      <p>
        Clickeado: {this.props.count} veces
        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          + {/* Incremeta */}
        </button>
        <button
          onClick={() => {
            this.props.decrement();
          }}
        >
          - {/* Decrementa */}
        </button>
        {/* Si quieres hacer los extra credit puede descomentar las líneas de abajo */}
        {/* <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa después de un segundo
                </button>  */}
      </p>
    );
  }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
