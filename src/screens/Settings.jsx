import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Settings.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import HomeLoader from "../Modal/HomeLoader.jsx";
import BuyModal from '../Modal/BuyModal';
import { HiArrowLeft } from 'react-icons/hi';
import 'react-activity/dist/library.css';
import {
    FaLock, FaFingerprint, FaShieldAlt, FaClock,
    FaNetworkWired, FaCoins, FaGasPump, FaSearchLocation,
    FaSun, FaLanguage, FaDollarSign, FaNewspaper
} from 'react-icons/fa';




const Settings = () => {
    const [loading, setLoading] = useState(false);
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSendModal, setOpenSendModal] = useState(false);

    const navigate = useNavigate();

    const openBuyModalFun = () => setOpenBuyModal(true);
    const openSendModalFun = () => setOpenSendModal(true);
    const buyFunction = () => setOpenBuyModal(false);
    const sellFunction = () => setOpenBuyModal(false);
    const sendFunction = () => setOpenSendModal(false);
    const receiveFunction = () => setOpenSendModal(false);
    const navigateHandler = () => navigate(-1);
    const sendHandler = () => navigate('/send-assets');

    return (
        <>
           
            {openBuyModal && <BuyModal buyFun={buyFunction} sellFun={sellFunction} />}
            {openSendModal && <SendModal sendFun={sendFunction} receiveFun={receiveFunction} />}
            <div className={styles.dashboard}>
                <div className={styles.leftSection}>
                    <div className={styles.sidebarContent}>
                        <h2 className={styles.sidebarTitle}>Dexvault</h2>
                        <nav className={styles.nav}>
                            <Link to="/home" className={styles.navItem}><FaHome /> <p>Home</p></Link>
                            <Link to="/wallet" className={styles.navItem}><FaWallet /> <p>Assets</p></Link>
                            <Link to="/analytics" className={styles.navItem}><FaChartLine /> <p>Trade</p></Link>
                            <Link to="/analytics" className={styles.navItem}><FaBell /> <p>Notifications</p></Link>
                            <Link to="/settings" className={styles.navItem}><FaCog /> <p>Settings</p></Link>
                        </nav>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.mobileHeader}>
                            <div className={styles.hamburger}>
                                <HiArrowLeft color={'black'} size={30} onClick={navigateHandler} />
                            </div>
                            <h2>Settings</h2>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.buysellbutton} onClick={openBuyModalFun}>Buy & Sell</button>
                            <button className={styles.sendreceivebutton} onClick={openSendModalFun}>Send & receive</button>
                            <button className={styles.notificationbutton}><FaBell color='black' size={18} /><span>55</span></button>
                            <button className={styles.imagebutton}><FaUser color='black' size={18} /></button>
                        </div>
                    </div>

                    <div className={styles.dashboardContent}>
                        <div className={styles.dashboardContentleft}>
                          

                            <div className={styles.settingsSection}>
                                {/* SECURITY */}
                                <h3 className={styles.settingsTitle}>Security</h3>
                                <div className={styles.settingsItem}>
                                    <FaLock className={styles.icon} /> Change PIN
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaFingerprint className={styles.icon} /> Biometric Authentication
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaShieldAlt className={styles.icon} /> Two-Factor Authentication
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaClock className={styles.icon} /> Auto-Lock
                                    <span className={styles.settingRight}>1 minute</span>
                                </div>
                                </div>
                                <div className={styles.settingsSection}>

                                {/* NETWORK */}
                                <h3 className={styles.settingsTitle}>Network</h3>
                                <div className={styles.settingsItem}>
                                    <FaNetworkWired className={styles.icon} /> Select Network
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaCoins className={styles.icon} /> Manage Tokens
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaGasPump className={styles.icon} /> Gas Fee Settings
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaSearchLocation className={styles.icon} /> Explorer Preference
                                </div>
                                </div>
                                <div className={styles.settingsSection}>
                                    </div>

                                {/* NOTIFICATIONS */}
                                <div className={styles.settingsSection}>
                                <h3 className={styles.settingsTitle}>Notifications</h3>
                                <div className={styles.settingsItem}>
                                    <FaSun className={styles.icon} /> Theme
                                    <span className={styles.settingRight}>Light</span>
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaLanguage className={styles.icon} /> Language
                                    <span className={styles.settingRight}>English</span>
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaDollarSign className={styles.icon} /> Currency
                                    <span className={styles.settingRight}>USD</span>
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaBell className={styles.icon} /> Transaction Alerts
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked readOnly />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaBell className={styles.icon} /> Price Alerts
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked readOnly />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div className={styles.settingsItem}>
                                    <FaNewspaper className={styles.icon} /> News & Announcements
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked readOnly />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                
                            </div>

                        </div>
                        <div className={styles.dashboardContentright}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
