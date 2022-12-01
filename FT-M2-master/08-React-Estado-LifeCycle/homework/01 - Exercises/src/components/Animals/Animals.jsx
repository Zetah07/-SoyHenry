import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width="300px" />
            <br/>
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
      );
  }
}
