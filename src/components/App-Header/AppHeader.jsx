import styles from './App-Header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

    return (
    <header className={styles.appheader}>
        <nav className={styles.navbtns}>
            <div className={styles.navconstuctor}>
                <BurgerIcon type="primary" />
                <span className={styles.buttonfont}>Конструктор</span>
            </div>
            <div className={styles.navorders}>
                <ListIcon type="secondary" />
                <span className={styles.buttonfont}>Лента заказов</span>
            </div>
        </nav>
        <Logo />
        <nav className={styles.navprofile}>
            <ProfileIcon type="secondary" />
            <span className={styles.buttonfont}>Личный кабинет</span>
        </nav>
    </header>
    );
}

export default AppHeader;