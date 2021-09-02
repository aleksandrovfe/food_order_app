import classes from './MealItemForm.module.css'
import {Input} from "../../UI/Input";

export const MealItemForm = ({id}) => {
    return (
        <form className={classes.form}>
            <Input
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
        </form>
    )
}