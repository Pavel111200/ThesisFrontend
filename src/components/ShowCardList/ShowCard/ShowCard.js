import styles from './ShowCard.module.css'
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
    return (
        <li className={styles.item}>
            <img className={styles.img} src={show.image} alt="Show Poster" />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{show.title}</h2>
            </div>
            <Link to={`/catalog/shows/${show.id}`} className={styles.btn}>Details</Link>
        </li>
    );
}

export default ShowCard;