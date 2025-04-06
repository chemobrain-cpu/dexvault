import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog } from 'react-icons/fa'; // Updated icon import

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
                            <FaHome />  <p>Home</p>
                        </Link>
                        <Link to="/wallet" className={styles.navItem}>
                            <FaWallet />  <p>Assets</p>
                        </Link>
                        <Link to="/analytics" className={styles.navItem}>
                            <FaChartLine />  <p>Trade</p>
                        </Link>
                        <Link to="/settings" className={styles.navItem}> {/* Corrected path */}
                            <FaCog />  <p>Settings</p>
                        </Link>
                    </nav>
                </div>
            </div>

            <div className={styles.mainSection}>
                <p>main section</p>
            </div>

            <div className={styles.rightSection}>
                <p>right section</p>
            </div>
        </div>
    );
};

export default Dashboard;
