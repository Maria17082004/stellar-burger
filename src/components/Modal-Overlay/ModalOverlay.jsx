import styles from './Modal-Overlay.module.css';

function ModalOverlay({handleClose}) {

    return (
    <div className={styles.overlay} onClick={handleClose}></div>
    );
}

export default ModalOverlay;