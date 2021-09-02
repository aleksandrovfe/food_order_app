import {Fragment, useState} from "react";
import {DUMMY_MEALS} from "../../extra-files/dummy-meals";
import {MealItem} from "./MealItem";

export const AvailableMeals = () => {
    const [meals, setMeals] = useState(DUMMY_MEALS)

    return (
        <div>
            {meals.map(meal => (
                <Fragment key={meal.id}>
                    <MealItem name={meal.name} description={meal.description} price={meal.price}/>
                </Fragment>
            ))}
        </div>
    )
}