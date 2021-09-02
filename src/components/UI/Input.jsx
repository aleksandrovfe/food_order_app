import classes from './Input.module.css'
import React from "react";

export const Input = React.forwardRef(({label, input}, ref) => {
    return (
        <div className={classes.input__wrapper}>
            <label className={`${classes.label} ${label.className}`} htmlFor={input.id}>{label.content}</label>
            <input ref={ref} className={`${classes.input} ${input.className}`} id={input.id} {...input}/>
        </div>
    )
})