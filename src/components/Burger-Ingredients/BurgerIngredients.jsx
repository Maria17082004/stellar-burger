import {useState} from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Burger-Ingredients.module.css';
import Card from '../Card/Card';
import PropTypes from "prop-types";

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array, 
}

function BurgerIngredients({ingredients}) {

    const [section, setSection] = useState(1);

    const renderSection = (ingredients, type) => {
        return ingredients.map((item) => {
            if (item.type === type) {
            return <Card key={item._id} ingredient={item} />
            }
        })
    }

    return (
    <section className={styles.ingredients}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div className={styles.wrapper} >
            <Tab value="Булки" active={section === 1} onClick={() => setSection(1)}>
            Булки
            </Tab>
            <Tab value="Соусы" active={section === 2} onClick={() => setSection(2)}>
            Соусы
            </Tab>
            <Tab value="Начинки" active={section === 3} onClick={() => setSection(3)}>
            Начинки
            </Tab>
        </div>
        <div className={styles.list}>
            <h2 className={styles.type}>Булки</h2>
            <div className={styles.typeingredients}>
                {renderSection(ingredients, 'bun')}
            </div>
            <h2 className={styles.type}>Соусы</h2>
            <div className={styles.typeingredients}>
                {renderSection(ingredients, 'sauce')}
            </div>
            <h2 className={styles.type}>Начинки</h2>
            <div className={styles.typeingredients}>
                {renderSection(ingredients, 'main')}
            </div>
        </div>
    </section>
    );
}

export default BurgerIngredients;