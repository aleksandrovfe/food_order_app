import classes from './HeaderCartBtn.module.css'
import cartIcon from '../../assets/images/CartIcon.svg'

export const HeaderCartBtn = () => {
    return (
        <button className={classes.btn}>
            <span>
                <img className={classes['btn__cart-icon']} src={cartIcon} alt=""/>
            </span>
            <span className={classes['btn__cart-text']}>Your cart</span>
            <span className={classes['btn__cart-text']}>3</span>
        </button>
    )
}
