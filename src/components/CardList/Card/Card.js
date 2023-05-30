import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    return (
        <li className={styles.item}>
            <img className={styles.img} src={movie.image} alt="Movie Poster" />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{movie.title}</h2>
            </div>
            <Link to={`/catalog/movies/${movie.id}`} className={styles.btn}>Details</Link>
        </li>
    );
}

export default Card;