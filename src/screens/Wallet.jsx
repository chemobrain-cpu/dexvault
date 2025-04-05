import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../store/action/appStorage';
import styles from './Login.module.css';
import AuthModal from '../modal/AuthModal';
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css";

const WalletScreen = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>

                    <h2 className={styles.title}>Log in or Create</h2>
                    <p className={styles.description}>Choose the method to create an account or log in to Dexvault.</p>
                    <button
                        className={styles.importbutton}>
                        Import Wallet
                    </button>

                    <button
                        className={styles.createbutton}>

                        Create Wallet
                       </button>

                </div>
            </div>
        </>
    );
};

export default WalletScreen;