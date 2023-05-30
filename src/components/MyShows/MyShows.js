import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { getLikedShows } from '../../services/showService';
import ShowCardList from '../ShowCardList/ShowCardList';
import styles from './MyShows.module.css';

const MyShows = () => {
    const [shows, setShows] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        try {
            getLikedShows(user.userId, user.accessToken)
        .then(result => {
            setShows(result);
        })
        } catch (error) {
            <Navigate to='/404' replace />
        }
        
    },[user.userId, user.accessToken]);

    return (
        <>
            <h1 className={styles.title}>Liked Shows</h1>
            {shows.length === 0 
            ? <>
                <img className={styles.img} src='https://gogeticon.net/files/3107478/9843fd586d4f6dffd86fe313b54296f4.png' alt='Sad png'/>
                <h2 className={styles.subTitle}>You haven't liked any shows yet. </h2>
              </>
            : <ShowCardList shows={shows} />}
        </>
    );
}

export default MyShows;