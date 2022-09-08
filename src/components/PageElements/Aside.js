import React from "react";
import Section from "./ExtraBits/Section";

const Aside = (props) => {
    const sectionList = [];

     for (let index=0;index<3;index++){
        sectionList.push(<Section heading="Header" paragraph="A bippy" key={index} />)
     }
    return (
        <aside style={{background:props.backgroundColor, color:props.textColor}}>
            <h1>
                {props.heading}
            </h1>
            {sectionList}
        </aside>
    )
}

export default Aside;