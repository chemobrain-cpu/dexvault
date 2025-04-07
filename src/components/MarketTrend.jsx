import styles from './Token.module.css';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const MarketTrend = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map(token => {
                const chartData = Array(10).fill().map((_, i) => ({
                    name: `-${10 - i}h`,
                    change: token.price_change_percentage_24h + (Math.random() - 0.5) * 2, // Simulated fluctuation
                }));

                return (
                    <div className={styles.cryptocard} key={token.id}>
                        <div className={styles.cryptocardLeft}>
                            <img
                                src={token.image}
                                alt="Wallet Icon"
                                className={styles.cryptocardImage}
                            />
                            <div className={styles.cryptocardNameCon}>
                                <p className={styles.cryptocardName}>
                                    {token.id.slice(0, 8).charAt(0).toUpperCase() + token.id.slice(1, 8)}
                                </p>

                            </div>

                        </div>

                        <div className={styles.cryptocardRight}>
                            <p className={styles.cryptocardAmount} >

                                <p className={styles.cryptocardPrice}> ${token.current_price.toFixed(2)}</p>
                            </p>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MarketTrend;
