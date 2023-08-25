import * as React from "react";

const Secondary = (props) => {
    const {label, func, width, id} = props;

    return (
        <div className="secondaryBut" onClick={func} style={{width: width}} id={id}>
            <h1>{label}</h1>
        </div>  
    );

};

export default Secondary;