import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../Modal-Overlay/ModalOverlay';
import PropTypes from "prop-types";

Modal.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  children: PropTypes.element,
};

function Modal({title, setOpenModal, openModal, children}) {

  const portal = document.getElementById("modals");

  const handleClose = () => setOpenModal(false)
  
  const handleCloseEsc = useCallback((e) => {
    if (e.code === "Escape") {
      handleClose()
    }
  }, [])

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    handleClose()
  }, [])
  
  useEffect(() => {
    document.addEventListener("keydown", handleCloseEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseEsc);
    }
  }, [openModal]);

    return createPortal(
      <section>
      <ModalOverlay handleClose={handleClose}/>
      <div className={styles.modal}>
        <div>
          <div className={styles.modalhead}>
            <span className={styles.title}>{title}</span>
            <CloseIcon type="primary" onClick={handleClick}/>
          </div>
          {children}
        </div>
      </div>
    </section>,
    portal
    );
}

export default Modal;