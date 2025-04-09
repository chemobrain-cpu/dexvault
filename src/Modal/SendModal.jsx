import React from "react";
import styles from "./BuyModal.module.css";
import { useNavigate } from "react-router-dom";

const SendModal = ({ modalVisible,sendFun,receiveFun }) => {
  let navigate = useNavigate()
  if (false) return null;





  const navigateSell = ()=>{
    navigate('/sell-assets')
  }


  const navigateReceive = ()=>{
    navigate('/buy-assets')

  }
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalView}>
        <p className={styles.modalState}>Send and receive crypto on dexvault</p>
        <div className={styles.modalButtonContainer}>
          <button className={styles.acceptBtn}  onClick={navigateSell}>
            send
          </button>
          <button className={styles.acceptBtn} onClick={navigateReceive}>
            receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendModal;