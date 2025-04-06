import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa'; // Updated icon import
import { HiMenu } from 'react-icons/hi'; // Import the HiMenu icon for the mobile menu
import { FaShoppingCart, FaTag } from 'react-icons/fa'; // Icons for buy, sell, send, and receive
import { RiMoneyDollarCircleLine } from 'react-icons/ri'; // Buy icon
import { MdGetApp } from 'react-icons/md'; // Receive icon
import {  FaPaperPlane } from 'react-icons/fa'; // Sell and Send icons


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
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
            </div>
        </div>
    );
};

export default Dashboard;

