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
import MarketTrend from '../components/MarketTrend';
import HomeLoader from "../Modal/HomeLoader.jsx";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';
import BuyModal from '../Modal/BuyModal';
import Sidebar from '../components/SideBar';
//import styles from '../../components/Sidebar.module.css';

const data = [
    { name: 'Bitcoin', value: 40 },
    { name: 'Ethereum', value: 35 },
    { name: 'Others', value: 25 }
];

const COLORS = ['#FF9900', '#3C3CFF', '#8E44AD'];

const transactions = [
    {
        id: 1,
        type: 'Received',
        asset: 'BTC',
        amount: '+0.005',
        date: 'Apr 6, 2025',
        icon: <FaArrowDown className={styles.iconReceived} />
    },
    {
        id: 2,
        type: 'Sent',
        asset: 'ETH',
        amount: '-0.2',
        date: 'Apr 5, 2025',
        icon: <FaArrowUp className={styles.iconSent} />
    },
    {
        id: 3,
        type: 'Swap',
        asset: 'USDT to BTC',
        amount: '$250',
        date: 'Apr 4, 2025',
        icon: <FaExchangeAlt className={styles.iconSwap} />
    }
];




const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1');
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSendModal, setOpenSendModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fetch crypto data from CoinGecko API
    useEffect(() => {
        const fetchCryptoData = async () => {
            if (loading) {

                return
            }
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets', {
                    /*params: {
                        vs_currency: 'usd', // Convert prices to USD
                        ids: 'bitcoin,ethereum,ripple,litecoin,cardano', // List of coin ids to fetch
                    }*/
                    params: {
                        vs_currency: 'usd', // Convert prices to USD
                        order: 'market_cap_desc', // Optional: order by market cap
                        per_page: 50, // Fetch 50 coins
                        page: 1 // First page
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

    const recieveFunction = () => {
        setOpenSendModal(false)
    }


    const openMobileMenu = () => {
        setSidebarOpen(true)
    }


    return (
        <>
            {loading && <HomeLoader />}
            {openBuyModal && <BuyModal buyFun={buyFunction} sellFun={sellFunction} />}
            {openSendModal && <SendModal sendFun={sendFunction} recieveFun={recieveFunction} />}
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

                {/*  sidebar content */}
                {sidebarOpen && (
                    <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                        {/* Customize sidebar content here */}
                        <ul>
                            <li>🏠 Home</li>
                            <li>👤 Profile</li>
                            <li>⚙️ Settings</li>
                        </ul>
                    </Sidebar>
                )}

                <div className={styles.mainSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.mobileHeader}>
                            <HiMenu color='black' size={30} className={styles.hamburger} onClick={openMobileMenu} />
                            <FaBell color='black' size={30} className={styles.bell} onClick={openMobileMenu} />
                        </div>

                        <div className={styles.title}>
                            <h2>Home</h2>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.buysellbutton} onClick={openBuyModalFun}>
                                Buy & Sell
                            </button>
                            <button className={styles.sendrecievebutton} onClick={openSendModalFun}>
                                Send & Recieve
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
                        <div className={styles.mobileMainSection}>
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
                                        <Token data={cryptoData} />
                                    )}
                                    {activeTab === 'tab2' && (
                                        <MarketTrend data={cryptoData} />
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className={styles.desktopMainSection}>

                            <div className={styles.desktopMainSectionleft}>
                                <div className={styles.desktopbalanceSection}>
                                    <p className={styles.desktopamounttext}>Your wallet balance</p>
                                    <div className={styles.desktopbalanceCard}>
                                        <p className={styles.desktopamount}>$500.00</p>

                                    </div>
                                </div>

                                <div className={styles.desktoptabsContainer}>
                                    <div className={styles.desktoptabssection}>
                                        <p>Price</p>
                                        <select onChange={(e) => {
                                            if (e.target.value === 'Token') {
                                                setActiveTab('tab1');
                                            } else if (e.target.value === 'Market trend') {
                                                setActiveTab('tab2');
                                            }
                                        }}>
                                            <option value="Token">Token</option>
                                            <option value="Market trend">Market trend</option>
                                        </select>

                                    </div>


                                </div>

                                {/* desktoptab content*/}
                                <div className={styles.desktoptabContent}>
                                    {activeTab === 'tab1' && (
                                        <Token data={cryptoData} />
                                    )}
                                    {activeTab === 'tab2' && (
                                        <MarketTrend data={cryptoData} />
                                    )}
                                </div>

                            </div>
                            <div className={styles.desktopMainSectionright}>

                                <div className={styles.rightPanel}>
                                    {/* Portfolio Breakdown with PieChart */}
                                    <div className={styles.card}>
                                        <h3 className={styles.heading}>Portfolio Breakdown</h3>
                                        <ResponsiveContainer width="100%" height={200}>
                                            <PieChart>
                                                <Pie
                                                    data={data}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={60}
                                                    label
                                                >
                                                    {data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                                <Legend />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* Recent Transactions Redesigned */}
                                    <div className={styles.card}>
                                        <h3 className={styles.heading}>Recent Transactions</h3>
                                        <div className={styles.transactionsList}>
                                            {transactions.map(tx => (
                                                <div key={tx.id} className={styles.transactionItem}>
                                                    <div className={styles.icon}>{tx.icon}</div>
                                                    <div className={styles.details}>
                                                        <div className={styles.txType}>
                                                            {tx.type} <span className={styles.asset}>{tx.asset}</span>
                                                        </div>
                                                        <div className={styles.date}>{tx.date}</div>
                                                    </div>
                                                    <div
                                                        className={`${styles.amount} ${tx.amount.startsWith('+')
                                                            ? styles.green
                                                            : tx.amount.startsWith('-')
                                                                ? styles.red
                                                                : ''
                                                            }`}
                                                    >
                                                        {tx.amount}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>





                    </div>


                </div>
            </div>
        </>

    );
};

export default Dashboard;



