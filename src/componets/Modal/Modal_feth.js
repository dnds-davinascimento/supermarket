import React from "react";
import Modal from "react-modal";
import styles from "./Modal_feth.module.css";

function ModalComponent({ onClose, children, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContainer}
      overlayClassName={styles.modalOverlay}
      closeTimeoutMS={100}
    >
      <div className={styles.modalContent}>
    
        {children}
      </div>
    </Modal>
  );
}

export default ModalComponent;
