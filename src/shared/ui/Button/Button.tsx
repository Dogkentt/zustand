import cn from "classnames"
import type { IButtonProps } from "../../types/Button"
import styles from "./Button.module.scss"

const Button = ({ children, onClick, disabled, classNames }: IButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={cn(styles["button"], classNames)}>
            { children }
        </button>
    )
}

export { Button }