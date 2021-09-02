import classes from './HeaderCartBtn.module.css'
import cartIcon from '../../assets/images/CartIcon.svg'
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../store/cart-context";

export const HeaderCartBtn = ({onShowCart}) => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx

    const numberOfItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)

    const btnClass = `${classes.btn} ${isBtnHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) return

        setIsBtnHighlighted(true)

        const timer = setTimeout(() => {
            setIsBtnHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClass} onClick={onShowCart}>
            <span>
                <img className={classes['btn__cart-icon']} src={cartIcon} alt=""/>
            </span>
            <span className={classes['btn__cart-text']}>Your cart</span>
            <span className={classes['btn__cart-text']}>{numberOfItems}</span>
        </button>
    )
}
