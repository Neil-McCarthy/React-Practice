import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amoutnInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amoutnInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length == 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form}>
            <Input 
            ref={amoutnInputRef}
                label="Amount" 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
            }}/>
            <button>
                + Add
            </button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;