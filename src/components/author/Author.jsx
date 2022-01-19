import style from './Author.module.css';
import img from '../../assets/images/image-avatar.png';

const Author = () => {
    return (
        <div className={style.container}>
            <img src={img} alt="User Avatar" className={style.avatar} />
            <span className={style.user}>Creation of <span className={style.name}>Jules Wyvern</span></span>
        </div>
    );
}

export default Author;