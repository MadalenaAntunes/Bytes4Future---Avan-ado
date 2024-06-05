// import "../styles/Card.css"
import styles from "../styles/Card.module.css"

export function Card(props) {
    return (
        <div className={props.isDarkMode === true ? styles.wrapperDark : styles.wrapperLight}>
            HELLO DO CARD
        </div>
    )
}