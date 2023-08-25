import * as React from "react";

const Primary = (props) => {
    const {label, func, width, id} = props;

    return (
        <div className="primaryBut" onClick={func} style={{width: width}} id={id}>
            <h1>{label}</h1>
        </div>  
    );

};

export default Primary;