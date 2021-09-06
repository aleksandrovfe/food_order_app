import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

export const Modal = (props) => {
    const ModalPortal = (props) => {
        return (
            <div className={classes.modal__wrapper}>
                <div className={`${classes.modal} ${props.className}`}>
                    {props.children}
                </div>
            </div>
        )
    }

    return (
        <>
            {ReactDOM.createPortal(
                <ModalPortal
                    {...props}
                />,
                document.getElementById('portal'))}
        </>
    )
}