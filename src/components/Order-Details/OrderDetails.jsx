import styles from './Order-Details.module.css';
import tick from "../../images/graphics.svg";

function OrderDetails() {

    return (
    <div className={styles.orderdetails}>
        <p className={styles.orderid}>{'034536'}</p>
        <p className={styles.id}>Идентификатор заказа</p>
        <img src={tick} alt='tick'></img>
        <p className={styles.cook}>Ваш заказ начали готовить</p>
        <p className={styles.wait}>Дождитесь готовности на орбитальной станции</p>
    </div>
    );
}

export default OrderDetails;