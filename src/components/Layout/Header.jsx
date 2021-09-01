import classes from './Header.module.css'
import {HeaderCartBtn} from "./HeaderCartBtn";

export const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Order Food App</h1>
            <HeaderCartBtn />
        </header>
    )
}
