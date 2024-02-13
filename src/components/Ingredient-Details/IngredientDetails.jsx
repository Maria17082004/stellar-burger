import styles from './Ingredient-Details.module.css';
import PropTypes from "prop-types";

IngredientDetails.propTypes = {
    ingredient: PropTypes.object,
};

function IngredientDetails({ingredient}) {

    return (
    <div className={styles.ingredientdetails}>
        <img src={ingredient.image_large} className={styles.image} alt={ingredient.name}/>
        <span className={styles.name}>{ingredient.name}</span>
            <div className={styles.list}>
                <div className={styles.composition}>
                    <span>Калории, ккал</span>
                    <span>{ingredient.calories}</span>
                </div>
                <div className={styles.composition}>
                    <span>Белки, г</span>
                    <span>{ingredient.proteins}</span>
                </div>
                <div className={styles.composition}>
                    <span>Жиры, г</span>
                    <span>{ingredient.fat}</span>
                </div>
                <div className={styles.composition}>
                    <span>Углеводы, г</span>
                    <span>{ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails;