import {AvailableMeals} from "./AvailableMeals";
import classes from './Meals.module.css'

export const Meals = () => {
    return (
        <main className={classes.main}>
            <AvailableMeals />
        </main>
    )
}