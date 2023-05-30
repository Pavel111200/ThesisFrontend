import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { getLikedMovies } from '../../services/movieService';
import CardList from '../CardList/CardList';
import styles from './MyMovies.module.css';

const MyMovies = () => {
    const [movies, setMovies] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        try {
            getLikedMovies(user.userId, user.accessToken)
        .then(result => {
            setMovies(result);
        })
        } catch (error) {
            <Navigate to='/404' replace />
        }
        
    },[user.userId, user.accessToken]);

    return (
        <>
            <h1 className={styles.title}>Liked Movies</h1>
            {movies.length === 0 
            ? <>
                <img className={styles.img} src='https://gogeticon.net/files/3107478/9843fd586d4f6dffd86fe313b54296f4.png' alt='Sad png'/>
                <h2 className={styles.subTitle}>You haven't liked any movies yet. </h2>
              </>
            : <CardList movies={movies} />}
        </>
    );
}

export default MyMovies;