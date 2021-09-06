import classes from './Header.module.css'
import {HeaderCartBtn} from "./HeaderCartBtn";

export const Header = ({onShowCart}) => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Order Food App</h1>
            <HeaderCartBtn onShowCart={onShowCart}/>
        </header>
    )
}
