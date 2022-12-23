import Card from "../Card/Card";
import styles from "./CardContainer.module.css"
function CardContainer() {
    return ( <div className={styles["card-container"]}>
        <Card/>
        <Card/>
        <Card/>
    </div> );
}

export default CardContainer;