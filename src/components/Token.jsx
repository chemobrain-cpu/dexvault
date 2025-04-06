import styles from './Token.module.css'



const Token = ({ cryptocard }) => {
    return <div className={styles.container}>
        {cryptocard.map((data) => <div className={styles.cryptocard}>
   loaded
        </div>)}
    </div>
}





export default Token