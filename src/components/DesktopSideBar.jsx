import React from 'react';
import styles from './DesktopSideBar.module.css';
import { FaBell, FaChartLine, FaCog, FaHome, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DesktopSideBar = () => {
   
   return <div className={styles.sidebarContent}>
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


}


export default DesktopSideBar

















.sidebarContent {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);

}

.sidebarContent {
    font-family: 'ABeeZee', sans-serif;
}

.sidebarTitle {
    font-weight: 900;
    color: #3498db;
    margin-bottom: 40px;
    padding-left: 10px;
    margin-top: 5px;

}

.nav {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
}

.navItem {
    font-weight: 900;
    color: rgb(107, 107, 107);
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    width: 200px;
    border-radius: 30px;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 40px;
    font-size: 17px;
    transition: background-color 0.6s ease, color 0.6s ease;
}

.navItem:nth-of-type(2) {
    background-color: #f6f6f6;
    color: #3498db;
}

.navItem:hover {
    background-color: #f5f5f5;
    color: #3498db;

}

.navItem p {
    margin-left: 10px;
}









@media (max-width: 850px) {
    .navItem p {
        display: none;
    }

    .navItem {
        padding: 12px;
        display: flex;
        width: 100px;
        font-size: 20px;
    }

}
