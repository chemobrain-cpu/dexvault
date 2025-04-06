import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi'; // Mobile menu icon
import { FaShoppingCart, FaTag } from 'react-icons/fa'; // Icons for buy, sell, send, and receive
import { RiMoneyDollarCircleLine } from 'react-icons/ri'; // Buy icon
import { MdGetApp } from 'react-icons/md'; // Receive icon
import { FaPaperPlane } from 'react-icons/fa'; // Sell and Send icons
import axios from 'axios'; // Import Axios for API requests
import Token from '../components/Token';
import HomeLoader from "../Modal/HomeLoader"


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cryptoData, setCryptoData] = useState([]); // State to store crypto data
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('tab1'); // State for switchable tabs

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fetch crypto data from CoinGecko API
    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets', {
                        params: {
                            vs_currency: 'usd', // Convert prices to USD
                            ids: 'bitcoin,ethereum,ripple,litecoin,cardano', // List of coin ids to fetch
                        }
                    }
                );
                setCryptoData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
                setLoading(false);
            }
        };
        fetchCryptoData();
    }, []);

    return (
        <>
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
                        <HiMenu color='black' size={30} className={styles.hamburger} />
                        <FaBell color='black' size={30} className={styles.bell} />
                    </div>

                    <div className={styles.title}>
                        <h2>Home</h2>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.buysellbutton}>
                            Buy & Sell
                        </button>
                        <button className={styles.sendrecievebutton}>
                            Send & Recieve
                        </button>

                        <button className={styles.notificationbutton}>
                            <FaBell color='rgb(180,180,180)' size={18} />
                            <span>55</span>
                        </button>

                        <button className={styles.imagebutton}>
                            <FaUser color='rgb(180,180,180)' size={18} />
                        </button>
                    </div>
                </div>

                <div className={styles.balanceSection}>
                    <div className={styles.balanceCard}>
                        <p className={styles.amount}>$500.00</p>
                        <p className={styles.amounttext}>Your wallet balance</p>

                        <div className={styles.balanceActionContainer}>
                            <button>
                                <RiMoneyDollarCircleLine size={18} /> Buy
                            </button>
                            <button>
                                <FaTag size={18} /> Sell
                            </button>
                            <button>
                                <FaPaperPlane size={18} /> Send
                            </button>
                            <button>
                                <MdGetApp size={18} /> Receive
                            </button>
                        </div>
                    </div>
                </div>

                {/* Switchable Tabs */}
                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        <button
                            className={activeTab === 'tab1' ? styles.activeTab : ''}
                            onClick={() => setActiveTab('tab1')}
                        >
                            Token
                        </button>
                        <button
                            className={activeTab === 'tab2' ? styles.activeTab : ''}
                            onClick={() => setActiveTab('tab2')}
                        >
                            Market Trends
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className={styles.tabContent}>
                        {activeTab === 'tab1' && (
                            <Token  data={cryptoData}/>
                        )}
                        {activeTab === 'tab2' && (
                            <div className={styles.tab2Content}>
                                <h3>Tab 2 Content</h3>
                                <p>This is the content for Tab 2.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Dashboard;



