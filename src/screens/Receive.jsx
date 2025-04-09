import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Receive.module.css';
import { FaHome, FaWallet, FaChartLine, FaCog, FaBell, FaUser } from 'react-icons/fa';
import axios from 'axios'; // Import Axios for API requests
import HomeLoader from "../Modal/HomeLoader.jsx";
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';
import BuyModal from '../Modal/BuyModal';
import { HiArrowLeft } from 'react-icons/hi';
import Transaction from '../components/Transaction';
import 'react-activity/dist/library.css'; // 👈 important
import { QRCodeSVG } from "qrcode.react";
import DesktopSideBar from '../components/DesktopSideBar';


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


const ReceiveAsset = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSendModal, setOpenSendModal] = useState(false);

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered crypto list





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


    return (
        <>
          
            {openBuyModal && <BuyModal buyFun={buyFunction} sellFun={sellFunction} />}
            {openSendModal && <SendModal sendFun={sendFunction} receiveFun={receiveFunction} />}
            <div className={styles.dashboard}>
                <div className={styles.leftSection}>
                    <DesktopSideBar/>
                </div>

                <div className={styles.mainSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.mobileHeader}>
                            <div className={styles.hamburger}>
                                <HiArrowLeft
                                    color={'black'}
                                    size={25}
                                    onClick={navigateHandler} // Or replace with your go back logic
                                />

                            </div>

                            <h2>Receive</h2>
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
                            {/* The code goes here */}
                            <div className={styles.receiveContainer}>
                                <div className={styles.receiveHeader}>
                                    <div>
                                        <select className={styles.select}>
                                            <option>staked-ether</option>
                                            <option>staked-ether</option>
                                        </select>

                                    </div>
                                </div>



                                <div className={styles.qrWrapper}>
                                    <QRCodeSVG value="https://example.com" size={128} className={styles.qrImage} />
                                </div>


                                <div className={styles.addressSection}>
                                    <p className={styles.copyInstruction}>Tap the button to copy your wallet address</p>

                                    <div className={styles.addressBox}>
                                        <span className={styles.walletAddress}>1MQsPqeUFvoU...</span>
                                        <button
                                            className={styles.copyButton}
                                            onClick={() => {
                                                navigator.clipboard.writeText("1MQsPqeUFvoU...");
                                                alert("Address copied to clipboard!");
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={styles.copyIcon} viewBox="0 0 16 16">
                                                <path d="M10 1.5A1.5 1.5 0 0 1 11.5 3v10A1.5 1.5 0 0 1 10 14.5H4A1.5 1.5 0 0 1 2.5 13V3A1.5 1.5 0 0 1 4 1.5h6zm-6 1A.5.5 0 0 0 3.5 3v10a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4zm8 2a.5.5 0 0 1 1 0v9A2.5 2.5 0 0 1 10.5 15H5a.5.5 0 0 1 0-1h5.5a1.5 1.5 0 0 0 1.5-1.5v-9z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

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

export default ReceiveAsset;
