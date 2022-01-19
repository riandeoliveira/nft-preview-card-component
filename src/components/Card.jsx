import style from './Card.module.css';
import Image from './image/Image';
import Desc from './description/Desc';
import Author from './author/Author';

const Card = () => {
    return (
        <div className={style.container}>
            <Image />
            <Desc />
            <Author />
        </div>
    );
}

export default Card;