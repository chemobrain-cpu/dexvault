import React from "react";
import styles from "./BuyModal.module.css";

const BuyModal = ({ sellFun,buyFun }) => {
  if (false) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalView}>
        <p className={styles.modalState}>Buy and Sell crypto on dexvault</p>
        <div className={styles.modalButtonContainer}>
          <button className={styles.acceptBtn} onClick={sellFun} >
            sell
          </button>
          <button className={styles.acceptBtn} onClick={buyFun}>
            receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;