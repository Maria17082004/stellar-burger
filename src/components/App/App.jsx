import { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css';
import AppHeader from '../App-Header/App-Header';
import BurgerIngredients from '../Burger-Ingredients/Burger-Ingredients';
import BurgerConstructor from '../Burger-Constructor/Burger-Constructor';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [yourBurger, setYourBurger] = useState([]);
    const [orderPrice, setOrderPrice] = useState(0);

    const addIngredient = (ingredient) => {
        setYourBurger((prev) => [...prev, ingredient])
        setOrderPrice((prev) => prev + ingredient.price)
    }

    const startIngredients = useCallback(async () => {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error during the loading data');
            }

            let data = (await response.json()).data;
            setIngredients(prev => {
                addIngredient(data[0]);
                addIngredient(data[8]);
                addIngredient(data[5]);
                addIngredient(data[11]);
                addIngredient(data[10]);
                return data
            });
        } catch (err) {
            console.log(err.message);
        }
    }, [])

    useEffect(() => {
        startIngredients();
    }, []);

    return (
    <div className={styles.app}>
        <AppHeader></AppHeader>
        <main className={styles.appmain}>
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor orderPrice={orderPrice} yourBurger={yourBurger}/>
        </main>
    </div>
    );
}

export default App;