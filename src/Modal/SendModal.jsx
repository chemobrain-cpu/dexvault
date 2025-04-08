import React from "react";
import styles from "./BuyModal.module.css";

const SendModal = ({ modalVisible,sendFun,receiveFun }) => {
  if (false) return null;
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalView}>
        <p className={styles.modalState}>Send and receive crypto on dexvault</p>
        <div className={styles.modalButtonContainer}>
          <button className={styles.acceptBtn}  onClick={sendFun}>
            send
          </button>
          <button className={styles.acceptBtn} onClick={receiveFun}>
            receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendModal;