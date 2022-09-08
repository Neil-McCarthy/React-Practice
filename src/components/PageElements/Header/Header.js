import React from "react";

const Header = (props) => {
    return (
        <header style={{background:props.backgroundColor, color:props.textColor}} >
            <h1>
                {props.heading}
            </h1>
        </header>
    )
}

export default Header;