import {useState} from "react";
import classes from './Cart.module.css'
import {Modal} from "../UI/Modal";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([{
        id: 'c1', name: 'Suchi', price: 12.21
    }])

    if (cartItems.length === 0) {
        return (
            <Modal>
                <p>No Items</p>
            </Modal>
        )
    } else {
        return (
            <Modal>
                {cartItems.map(item => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
                <div className={classes['total-amount']}>
                    <span className={classes['total-amount__text']}>Total amount</span>
                    <span className={classes['total-amount__price']}>35.63</span>
                </div>
                <div className={classes['cart-actions']}>
                    <button className={classes['cart-actions__btn']}>Close</button>
                    <button className={classes['cart-actions__btn']}>Order</button>
                </div>
            </Modal>
        )
    }
}