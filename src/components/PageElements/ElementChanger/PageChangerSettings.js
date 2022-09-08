import React, {useState} from "react";
import AddSection from "../ExtraBits/AddSection";
import PageChangerBasics from "./PageChangerBasics";
import SelectFull from "../ExtraBits/SelectFull";

let placementListExample = ['Default','Top','Right','Bottom','Left'];
let templateList= ['Default','Workplace','Social','Sporting','Personal'];
let deviceList = ['Desktop','Laptop','Mobile','Tablet'];                                

const PageChangerSettings = (props) => {

    function elementSpecificOptions(element){
        if (element === 'body') {
            return (
                <React.Fragment>
                    <label>
                        Template
                    </label>
                    <SelectFull listOfOptions={templateList} />
                    <label>
                        Device
                    </label>
                    <SelectFull listOfOptions={deviceList} />
                </React.Fragment>
            );
        } else if (element === 'header') {
            return (
                <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
            );
        } else if (element === 'nav') {
            return (
                <React.Fragment>
                    <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
                    <AddSection sectionAdder={props.sectionAdder}/>
                </React.Fragment>
            );
        } else if (element === 'main') {
            return (
                <React.Fragment>
                    <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
                    <label>
                        Placing
                    </label>
                    <SelectFull listOfOptions={placementListExample}/>
                    <AddSection sectionAdder={props.sectionAdder}/>
                </React.Fragment>
            );
        }  else if (element === 'aside') {
            return (
                <React.Fragment>
                    <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
                    <AddSection sectionAdder={props.sectionAdder}/>
                </React.Fragment>
            );
        }  else if (element === 'footer') {
            return (
                <React.Fragment>
                    <PageChangerBasics title={props.elementSelected} backgroundChange={backgroundColorNew} textChange={textColorNew} Changer={processChange} />
                    <AddSection sectionAdder={props.sectionAdder}/>
                </React.Fragment>
            );
        }
    };

    function pageChangerExecute(element) {
        props.changeColorFunction(props.elementSelected,backgroundColor,textColor);
    }

    const [backgroundColor, backgroundColorNew] = useState('');
    const [textColor, textColorNew] = useState('');

    function processChange(valueToChange,newValue) {
        valueToChange(newValue);
    }
    return (
        <section>
            <form>
                {elementSpecificOptions(props.elementSelected)}
            </form>
            <button type='submit' onClick={() => {pageChangerExecute(props.elementSelected)}}>
                Apply
            </button>
        </section>
    );  
}

export default PageChangerSettings;