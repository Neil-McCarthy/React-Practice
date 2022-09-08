import React from "react";
import ListFull from "./ExtraBits/ListFull";


const Nav = (props) => {

    return (
    <nav style={{background:props.backgroundColor, color:props.textColor}}>
        <ListFull listOfOptions={props.listOfOptions} />
    </nav>
    );
}

export default Nav;