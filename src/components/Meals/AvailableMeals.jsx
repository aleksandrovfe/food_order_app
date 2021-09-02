import {Fragment, useState} from "react";
import {DUMMY_MEALS} from "../../extra-files/dummy-meals";
import {MealItem} from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

export const AvailableMeals = () => {
    const [meals, setMeals] = useState(DUMMY_MEALS)

    return (
        <div className={classes['meals-list']}>
            {meals.map(meal => (
                <Fragment key={meal.id}>
                    <MealItem id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
                </Fragment>
            ))}
        </div>
    )
}