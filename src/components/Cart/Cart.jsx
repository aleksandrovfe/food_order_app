import {useContext, useState} from "react";
import classes from './Cart.module.css'
import {Modal} from "../UI/Modal";
import {CartContext} from "../../store/cart-context";
import {CartItem} from "./CartItem";

export const Cart = ({onHideCart}) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const addItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }

    return (
        <Modal className={classes.modal__cart}>
            {cartCtx.items.map(item => (
               <CartItem
                   key={item.id}
                   item={item}
                   onAddItem={() => addItemHandler(item)}
                   onRemoveItem={() => removeItemHandler(item.id)}
               />
            ))}
            <div className={classes['total-amount']}>
                <span className={classes['total-amount__text']}>Total amount</span>
                <span className={classes['total-amount__price']}>{totalAmount}</span>
            </div>
            <div className={classes['cart-actions']}>
                <button className={classes['cart-actions__btn']} onClick={onHideCart}>Close</button>
                {hasItems && <button className={classes['cart-actions__btn']}>Order</button>}
            </div>
        </Modal>
    )
}