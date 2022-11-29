import React from "react";

class Botones extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div>
            <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
            <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
            </>
        )
    }
}

export default Botones;