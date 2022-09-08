import React from "react";
import ColorOptions from "../ExtraBits/ColorOptions";
import SelectFull from "../ExtraBits/SelectFull";


let behaviourListExample = ['Default','Independant','Fixed']

const PageChangerBasics = (props) => {

    return (
        <React.Fragment>
            <label>
                Background Colour {props.title}
            </label>
            <ColorOptions valueToChange={props.backgroundChange} changeMaker={props.Changer}/>
            <label>
                Text Colour
            </label>
            <ColorOptions valueToChange={props.textChange} changeMaker={props.Changer}/>
            <label>
                Behaviour
            </label>
            <SelectFull listOfOptions={behaviourListExample}/>
        </React.Fragment>
    )
}

export default PageChangerBasics;