import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate, Navigate} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { deleteShow, getOne } from '../../services/showService';
import styles from './ShowDetails.module.css';
import ReviewList from '../ReviewList/ReviewList';

const ShowDetails = () => {
    const {showId} = useParams();
    const [show, setShow] = useState({});
    const {user} = useUserContext();
    const navigate = useNavigate();


    const DeleteHandler = () => {
        deleteShow(showId, user.accessToken)
        .then(()=> navigate('/catalog/shows'))
    }

    useEffect(() => {
        try {
            getOne(showId)
            .then(result => {
                setShow(result);
            });
        } catch (error) {
            <Navigate to='/404' replace />
        }
    },[showId]);

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
                   Season: {show.season}
                </p>
                <p className={styles.info}>
                    Writer: {show.writer}
                </p>
                <p className={styles.info}>
                    Number of episodes: {show.numberOfEpisodes}
                </p>
                {show.rating ? <p className={styles.info}>Rating: {show.rating}</p> : <p className={styles.info}>No rating!</p>}
                {show.genre ? <p className={styles.info}>Genre: {show.genre}</p> : <p className={styles.info}>No genre!</p>}
                <div className={styles.buttonWrapper}>
                <Link to={`/catalog/shows/${showId}/review`} className={styles.btn}>
                        Add Review
                    </Link>
                    {user.role === "Admin" && 
                    <>
                    <Link to={`/catalog/shows/${showId}/edit`} className={styles.btn}>
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
            {show.length === 0 ? <h2>No review!</h2> : <ReviewList reviews={show.reviews}/>}
        </section>
        </>
    );
}

export default ShowDetails;