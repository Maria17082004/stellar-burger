import { useState } from 'react';
import styles from './Card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import IngredientDetails from '../Ingredient-Details/IngredientDetails';
import PropTypes from "prop-types";

Card.propTypes = {
    ingredient: PropTypes.object
}

function Card({ingredient}) {

    const [openModal, setOpenModal] = useState(false)

    const handleClick = () => {
        setOpenModal(!openModal)
    }

    return (
    <div className={styles.ingredient} onClick={handleClick}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name}/>
        <span className={styles.price}>
            {ingredient.price}
            <CurrencyIcon type="primary"/>
        </span>
        <p className={styles.name}>{ingredient.name}</p>
        {
            openModal && (
                <Modal title="Детали ингредиента" setOpenModal={setOpenModal} openModal={openModal}> 
                    <IngredientDetails ingredient={ingredient}/>
                </Modal>
            )
        }
    </div>
    );
}

export default Card;