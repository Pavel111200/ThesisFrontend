import { Link, useParams } from 'react-router-dom';
import styles from './ShowDetails.module.css';
import ReviewList from '../ReviewList/ReviewList';
import { useShowContext } from '../../contexts/ShowContext';

const ShowDetails = () => {
    const { showId } = useParams();
    const { getShowById } = useShowContext();

    const show = getShowById(showId);


    const DeleteHandler = () => {
        console.log('Deleted!');
    }

    return (
        <>
            <section className={styles.section}>
                <img
                    className={styles.img}
                    src={show.image}
                    alt="Show poster"
                />
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{show.title}</h2>
                    <p className={styles.desc}>
                        {show.description}
                    </p>
                    <p className={styles.info}>
                        Seasons: {show.seasons}
                    </p>
                    <p className={styles.info}>
                        Number of episodes: {show.episodes}
                    </p>
                    <p className={styles.info}>
                        Creator: {show.creator}
                    </p>
                    {show.rating ? <p className={styles.info}>Rating: {show.rating}</p> : <p className={styles.info}>No rating!</p>}
                    {show.genre ? <p className={styles.info}>Genre: {show.genre}</p> : <p className={styles.info}>No genre!</p>}
                    <div className={styles.buttonWrapper}>
                        <Link to={`/catalog/shows/${showId}/review`} className={styles.btn}>
                            Add Review
                        </Link>

                        <Link to={`/catalog/shows/${showId}/edit`} className={styles.btn}>
                            Edit
                        </Link>
                        <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                            Delete
                        </button>

                    </div>
                </div>
            </section>
            <section className={styles.reviewWrapper}>
                {show.length === 0 ? <h2>No review!</h2> : <ReviewList reviews={show.reviews} />}
            </section>
        </>
    );
}

export default ShowDetails;