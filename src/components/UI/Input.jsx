import classes from './Input.module.css'

export const Input = ({label, input}) => {
    return (
        <div className={classes.input__wrapper}>
            <label className={`${classes.label} ${label.className}`} htmlFor={input.id}>{label.content}</label>
            <input className={`${classes.input} ${input.className}`} id={input.id} {...input}/>
        </div>
    )
}