import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SendAsset.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import axios from 'axios'; // Import Axios for API requests
import HomeLoader from "../Modal/HomeLoader.jsx";
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';
import BuyModal from '../Modal/BuyModal';
import { HiArrowLeft } from 'react-icons/hi';
import Transaction from '../components/Transaction';
import 'react-activity/dist/library.css'; // 👈 important
import { Spinner } from 'react-activity';



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
                        per_page: 20, // Fetch 50 coins
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

    const receiveFunction = () => {
        setOpenSendModal(false)
    }

    const navigateHandler = () => {
        // alert('hello')
        navigate(-1)
    }


    const sendHandler = ()=>{

        navigate('/send')
    }



 


    return (
        <>
         
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

                            <h2>Select asset</h2>
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
                            <div className={styles.searchContainer}>
                                <input
                                    type="text"
                                    placeholder="Search asset..."
                                    className={styles.searchInput}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className={styles.cryptoList}>

                                 {!loading?(
                                    filteredCrypto && filteredCrypto.map((coin) => (
                                        <div onClick={sendHandler} key={coin.id} className={styles.cryptoItem}>
                                            <div className={styles.coinInfo}>
                                                <img src={coin.image} alt={coin.name} className={styles.coinImage} />
                                                <div>
                                                    <div className={styles.coinName}>{coin.name}</div>
                                                    <div className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</div>
                                                </div>
                                            </div>
                                            <div
                                                className={styles.coinPrice}
                                                style={{
                                                    color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red'
                                                }}
                                            >
                                                ${coin.current_price.toLocaleString()}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '150px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingBottom: '20px'
                                    }}>
                                        <Spinner size={24} color="#4F46E5" speed={0.5} animating={true} />
                                    </div>
                                )}


                            </div>
                        </div>


                        <div className={styles.dashboardContentright}>

                            <Transaction transactions={transactions} />



                        </div>



                    </div>


                </div>
            </div>

        </>

    );
};

export default SendAsset;
