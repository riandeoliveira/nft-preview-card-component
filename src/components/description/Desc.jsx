import style from './Desc.module.css';
import ethereum from '../../assets/icons/icon-ethereum.svg';
import clock from '../../assets/icons/icon-clock.svg';

const Desc = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Equilibrium #3429</h1>
            <p className={style.text}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={style.info}>
                <div className={style.price_container}>
                    <img src={ethereum} alt="Ethereum Icon" className={style.ethereum_icon} />
                    <span className={style.price}>0.041 ETH</span>
                </div>
                <div className={style.time_container}>
                    <img src={clock} alt="Clock Icon" className={style.clock_icon} />
                    <span className={style.time}>3 days left</span>
                </div>
            </div>
        </div>
    );
}

export default Desc;