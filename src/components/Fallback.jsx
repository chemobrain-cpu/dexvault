import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../screens/Splash.module.css'; // Assuming you have a separate file for the styles


const Splash = () => {
 

  return (
    <>
      <div className={styles.screen}>
        <div className={`${styles.container}`}>
          {/* Replace Text with Image */}
          <img
            src={'../../icons8-wallet-32.png'} // Ensure the path is correct
            alt="Wallet Icon"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
};

export default Splash;