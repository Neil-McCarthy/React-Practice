import React from "react";

const Footer = (props) => {
    return (
        <footer style={{background:props.backgroundColor, color:props.textColor}}>
            <small>
                This is a footer
            </small>
        </footer>
    )
}

export default Footer;