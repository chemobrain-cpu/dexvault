import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SendAsset.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import HomeLoader from "../Modal/HomeLoader.jsx";
import BuyModal from '../Modal/BuyModal';
import { HiArrowLeft } from 'react-icons/hi';
import 'react-activity/dist/library.css'; // 👈 important







const SendAsset = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSendModal, setOpenSendModal] = useState(false);

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered crypto list
    const filteredCrypto = cryptoData.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );





    const openBuyModalFun = () => {
        setOpenBuyModal(true)
    }

    const openSendModalFun = () => {
        setOpenSendModal(true)
    }

    const buyFunction = () => {
        setOpenBuyModal(false)


    }
    const sellFunction = () => {
        setOpenBuyModal(false)
    }


    const sendFunction = () => {
        setOpenSendModal(false)
    }

    const receiveFunction = () => {
        setOpenSendModal(false)
    }

    const navigateHandler = () => {
        // alert('hello')
        navigate(-1)
    }




    const sendHandler = () => {
        navigate('/send-assets')
    }


    return (
        <>
            {loading && <HomeLoader />}
            {openBuyModal && <BuyModal buyFun={buyFunction} sellFun={sellFunction} />}
            {openSendModal && <SendModal sendFun={sendFunction} receiveFun={receiveFunction} />}
            <div className={styles.dashboard}>
                <div className={styles.leftSection}>
                    <div className={styles.sidebarContent}>
                        <h2 className={styles.sidebarTitle}>Dexvault</h2>
                        <nav className={styles.nav}>
                            <Link to="/home" className={styles.navItem}>
                                <FaHome /> <p>Home</p>
                            </Link>
                            <Link to="/wallet" className={styles.navItem}>
                                <FaWallet /> <p>Assets</p>
                            </Link>
                            <Link to="/analytics" className={styles.navItem}>
                                <FaChartLine /> <p>Trade</p>
                            </Link>
                            <Link to="/analytics" className={styles.navItem}>
                                <FaBell /> <p>Notifications</p>
                            </Link>
                            <Link to="/settings" className={styles.navItem}>
                                <FaCog /> <p>Settings</p>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.mobileHeader}>
                            <div className={styles.hamburger}>
                                <HiArrowLeft
                                    color={'black'}
                                    size={30}
                                    onClick={navigateHandler} // Or replace with your go back logic
                                />

                            </div>

                            <h2>Settings</h2>
                        </div>

                        <div className={styles.title}>
                            <h2></h2>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.buysellbutton} onClick={openBuyModalFun}>
                                Buy & Sell
                            </button>
                            <button className={styles.sendreceivebutton} onClick={openSendModalFun}>
                                Send & receive
                            </button>

                            <button className={styles.notificationbutton}>
                                <FaBell color='black' size={18} />
                                <span>55</span>
                            </button>

                            <button className={styles.imagebutton}>
                                <FaUser color='black' size={18} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.dashboardContent}>



                        <div className={styles.dashboardContentleft}>

                            {
                                /* setting page goes here  */
                            }
                            


                        </div>


                        <div className={styles.dashboardContentright}>
                        </div>



                    </div>


                </div>
            </div>

        </>

    );
};

export default SendAsset;