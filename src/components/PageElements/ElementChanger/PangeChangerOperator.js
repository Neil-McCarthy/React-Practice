import React from "react";

const PageChangerOperator = (props) => {
    if (props.element === 'body') {
        console.log(props.element);
    } else if (props.element === 'header') {
        console.log(props.element);
    } else if (props.element === 'nav') {
        console.log(props.element);
    } else if (props.element === 'main') {
        console.log(props.element);
    } else if (props.element === 'aside') {
        console.log(props.element);
    } else if (props.element === 'footer') {
        console.log(props.element);
    }
}

export default PageChangerOperator;