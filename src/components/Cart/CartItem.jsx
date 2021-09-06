import classes from "./CartItem.module.css";

export const CartItem = ({item, onAddItem, onRemoveItem}) => {
    return (
        <div className={classes.cart__item}>
            <p className={classes.cart__name}>{item.name}</p>
            <p className={classes.cart__price}>${item.price}</p>
            <div className={classes.cart__actions}>
                <button onClick={onAddItem}>+</button>
                <p className={classes.cart__amount}>{item.amount}</p>
                <button onClick={onRemoveItem}>-</button>
            </div>
        </div>
    )
}