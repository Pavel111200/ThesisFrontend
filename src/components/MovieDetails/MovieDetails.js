import {Link, useParams, useNavigate} from 'react-router-dom';
import styles from './MovieDetails.module.css';
import ReviewList from '../ReviewList/ReviewList';
import { useMovieContext } from '../../contexts/MovieContext';

const MovieDetails = () => {
    const {movieId} = useParams();
    const navigate = useNavigate()
    const {getMovieById, deleteMovie} = useMovieContext();

    const movie = getMovieById(movieId);

    const DeleteHandler = () => {
        deleteMovie(movieId)
        navigate("/catalog/movies")
    }

    return (
        <>
        <section className={styles.section}>
            <img
                className={styles.img}
                src={movie.image}
                alt="Movie poster"
            />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.desc}>
                    {movie.description}
                </p>
                <p className={styles.info}>
                   Release date: {movie.createdOn}
                </p>
                <p className={styles.info}>
                    Writer: {movie.writer}
                </p>
                <p className={styles.info}>
                    Director: {movie.director}
                </p>
                {movie.rating ? <p className={styles.info}>Rating: {movie.rating}</p> : <p className={styles.info}>No rating!</p>}
                {movie.genre ? <p className={styles.info}>Genre: {movie.genre}</p> : <p className={styles.info}>No genre!</p>}
                {movie.runtime ? <p className={styles.info}>Runtime: {movie.runtime}</p> : <p className={styles.info}>No runtime!</p>}
                <div className={styles.buttonWrapper}>
                    <Link to={`/catalog/movies/${movie.id}/review`} className={styles.btn}>Add review</Link>
                    <Link to={`/catalog/movies/${movieId}/edit`} className={styles.btn}>
                        Edit
                    </Link>
                    <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                        Delete
                    </button>                    
                </div>
            </div>
        </section>
        <section className={styles.reviewWrapper}>
        {movie.length === 0 ? <h2>No review!</h2> : <ReviewList reviews={movie.reviews}/>}
    </section>
    </>
    );
}

export default MovieDetails;