import React from "react";
import coffee from "../../PageImages/coffee.jpg";


const Section = (props) => {
    return(
        <section>
            <h1>
                {props.heading}
            </h1>
            <p>
                {props.paragraph}
            </p>
            <img src={coffee} alt="coffee"/>
        </section>
    );
}

export default Section;