import classes from './MealItemForm.module.css'
import {Input} from "../../UI/Input";
import {useRef, useState} from "react";

export const MealItemForm = ({id, onAddToCart}) => {
    const amountInputRef = useRef()
    const [isAmountValid, setIsAmountValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()
        const amountNumber = +amountInputRef.current.value

        if (amountNumber < 0 ||
            amountNumber > 10) {
            setIsAmountValid(false)

            return;
        }

        onAddToCart(amountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={{
                    content: "Amount",
                    className: ''
                }}
                input={{
                    className: classes.from__input,
                    type: "number",
                    id: "amount" + id,
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}/>
            <button>+ Add</button>
            {!isAmountValid && <p>Enter valid amount (1-10)</p>}
        </form>
    )
}