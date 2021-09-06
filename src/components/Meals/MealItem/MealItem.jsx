import classes from './MealItem.module.css'
import {MealItemForm} from "./MealItemForm";
import {useContext} from "react";
import {CartContext} from "../../../store/cart-context";

export const MealItem = ({name, description, price, id}) => {
    const fixedPrice = `$${price.toFixed(2)}`
    const cartCtx = useContext(CartContext)

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id,
            name,
            amount,
            price
        })
    }

    return (
        <div className={classes['meal-item__wrapper']}>
            <div className={classes['meal-item']}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.desc}>{description}</p>
                <p className={classes.price}>{fixedPrice}</p>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </div>
    )
}