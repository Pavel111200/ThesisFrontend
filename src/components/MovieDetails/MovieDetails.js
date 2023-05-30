import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate, Navigate} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { deleteMovie, getOne } from '../../services/movieService';
import styles from './MovieDetails.module.css';
import ReviewList from '../ReviewList/ReviewList';

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const {user} = useUserContext();
    const navigate = useNavigate();

    const DeleteHandler = () => {
        deleteMovie(movieId,user.accessToken)
        .then(()=> navigate('/catalog/movies'))
    }

    useEffect(() => {
        try {
            getOne(movieId)
            .then(result => setMovie(result));
        } catch (error) {
            <Navigate to='/404' replace />
        }
    },[movieId]);

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
                    Director: {movie.writer}
                </p>
                {movie.rating ? <p className={styles.info}>Rating: {movie.rating}</p> : <p className={styles.info}>No rating!</p>}
                {movie.genre ? <p className={styles.info}>Genre: {movie.genre}</p> : <p className={styles.info}>No genre!</p>}
                {movie.runtime ? <p className={styles.info}>Runtime: {movie.runtime}</p> : <p className={styles.info}>No runtime!</p>}
                <div className={styles.buttonWrapper}>
                    <Link to={`/catalog/movies/${movieId}/review`} className={styles.btn}>Add review</Link>
                    {user.role === "Admin" && 
                    <>
                    <Link to={`/catalog/movies/${movieId}/edit`} className={styles.btn}>
                        Edit
                    </Link>
                    <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                        Delete
                    </button>
                    
                    </>
                    }
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