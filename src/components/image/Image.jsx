import style from './Image.module.css';
import img from '../../assets/images/image-equilibrium.jpg';
import view from '../../assets/icons/icon-view.svg';

const Image = () => {
    return (
        <div className={style.container}>
            <img src={img} alt="NFT Image" className={style.image} />
            <div className={style.background}>
                <img src={view} alt="View Icon" className={style.view_icon} />
            </div>
        </div>
    );
}

export default Image;