import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotificationPage.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import axios from 'axios';
import BuyModal from '../Modal/BuyModal';
import { HiArrowLeft } from 'react-icons/hi';
import 'react-activity/dist/library.css';
import {
    Bitcoin,
    ArrowDownLeft,
    ArrowUpRight,
    DollarSign,
} from "lucide-react"
import DesktopSideBar from '../components/DesktopSideBar';

const Notification = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSendModal, setOpenSendModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCryptoData = async () => {
            if (loading) return;
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 20,
                        page: 1
                    }
                });
                setCryptoData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
                setLoading(false);
            }
        };
        fetchCryptoData();
    }, []);

    const openBuyModalFun = () => setOpenBuyModal(true);
    const openSendModalFun = () => setOpenSendModal(true);
    const buyFunction = () => setOpenBuyModal(false);
    const sellFunction = () => setOpenBuyModal(false);
    const navigateHandler = () => navigate(-1);

    return (
        <>
            {openBuyModal && <BuyModal buyFun={buyFunction} sellFun={sellFunction} />}
            <div className={styles.dashboard}>
                <div className={styles.leftSection}>
                    <DesktopSideBar/>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.mobileHeader}>
                            <div className={styles.hamburger}>
                                <HiArrowLeft color={'black'} size={25} onClick={navigateHandler} />
                            </div>
                            <h2>Notifications</h2>
                        </div>
                        <div className={styles.title}><h2></h2></div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.buysellbutton} onClick={openBuyModalFun}>Buy & Sell</button>
                            <button className={styles.sendreceivebutton} onClick={openSendModalFun}>Send & receive</button>
                            <button className={styles.notificationbutton}><FaBell color='black' size={18} /><span>55</span></button>
                            <button className={styles.imagebutton}><FaUser color='black' size={18} /></button>
                        </div>
                    </div>

                    <div className={styles.dashboardContent}>
                        <div className={styles.dashboardContentleft}>


                            <div className={styles.notificationContainer}>
                                <div className={styles.notificationItem}>
                                    <Bitcoin className={styles.notificationIcon} />
                                    <div>
                                        <h4 className={styles.notificationTitle}>Bitcoin Purchase</h4>
                                        <p className={styles.notificationText}>You bought 0.005 BTC for $150</p>
                                    </div>
                                    <span className={styles.notificationTime}>2h ago</span>
                                </div>

                                <div className={styles.notificationItem}>
                                    <ArrowUpRight className={styles.notificationIcon} />
                                    <div>
                                        <h4 className={styles.notificationTitle}>Ethereum Transfer</h4>
                                        <p className={styles.notificationText}>0.03 ETH sent to 0x34A...E90</p>
                                    </div>
                                    <span className={styles.notificationTime}>5h ago</span>
                                </div>

                                <div className={styles.notificationItem}>
                                    <ArrowDownLeft className={styles.notificationIcon} />
                                    <div>
                                        <h4 className={styles.notificationTitle}>USDT Received</h4>
                                        <p className={styles.notificationText}>You received $200 USDT</p>
                                    </div>
                                    <span className={styles.notificationTime}>Yesterday</span>
                                </div>

                                <div className={styles.notificationItem}>
                                    <ArrowDownLeft className={styles.notificationIcon} />
                                    <div>
                                        <h4 className={styles.notificationTitle}>USDT Received</h4>
                                        <p className={styles.notificationText}>You received $200 USDT</p>
                                    </div>
                                    <span className={styles.notificationTime}>Yesterday</span>
                                </div>

                                <div className={styles.notificationItem}>
                                    <ArrowDownLeft className={styles.notificationIcon} />
                                    <div>
                                        <h4 className={styles.notificationTitle}>USDT Received</h4>
                                        <p className={styles.notificationText}>You received $200 USDT</p>
                                    </div>
                                    <span className={styles.notificationTime}>Yesterday</span>
                                </div>
                            </div>

                        </div>
                        <div className={styles.dashboardContentright}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
