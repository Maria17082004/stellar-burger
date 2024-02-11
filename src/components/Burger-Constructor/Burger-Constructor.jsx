import { useState } from 'react';
import styles from './Burger-Constructor.module.css';
import {Button, DragIcon, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import OrderDetails from '../Order-Details/Order-Details';
import PropTypes from "prop-types";

BurgerConstructor.propTypes = {
    orderPrice: PropTypes.number,
    yourBurger: PropTypes.array, 
};

function BurgerConstructor({orderPrice, yourBurger}) {

    const [openModal, setOpenModal] = useState(false)
    
    return (
        <section className={styles.constructorelement}>
            <div className={styles.buntop}>
                { yourBurger.map((ingredient) => {
                    if (ingredient.type === 'bun') {
                        return <ConstructorElement
                        key={ingredient._id}
                        type="top"
                        isLocked={true}
                        text={ingredient.name + ' (верх)'}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                    }
                })}
            </div>
            <div className={styles.mainingrs}>
            { yourBurger.map((ingredient) => {
                    if (ingredient.type !== 'bun') {
                        return <div className={styles.wrapper} key={ingredient._id}>
                        <DragIcon type="primary" />
                        <ConstructorElement className={styles.info}
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                    }
                })}
            </div>
            <div className={styles.bunbottom}>
            { yourBurger.map((ingredient) => {
                    if (ingredient.type === 'bun') {
                        return <ConstructorElement
                        key={ingredient._id}
                        type="bottom"
                        isLocked={true}
                        text={ingredient.name + ' (низ)'}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                    }
                })}
            </div>
            <div className={styles.bill}>
                <p className={styles.price}>{orderPrice}</p>
                <span className={"pr-10"}>
                    <CurrencyIcon type="primary"/>
                </span>
                <Button htmlType="button" type="primary" size="medium" onClick={() => setOpenModal(true)}>Оформить заказ</Button>
            </div>
            {
                openModal && (
                    <Modal setOpenModal={setOpenModal} openModal={openModal}>
                        <OrderDetails />
                    </Modal>
            )
        }
        </section>
    );
}

export default BurgerConstructor;