import { useEffect, useState } from "react";
import { getAll } from "../../services/showService";
import ShowCardList from "../ShowCardList/ShowCardList";
import styles from './AllShows.module.css';
import { Navigate } from "react-router-dom";

const AllShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        try {
            getAll()
        .then(result => {
            setShows(result);
        })
        } catch (error) {
            return (
                <Navigate to='/404' replace />
            )
        }

        
    },[]);

    return (
        <>
            <h1 className={styles.title}>All Shows</h1>
            {shows.length === 0 ? <h2>Loading...</h2> : <ShowCardList shows={shows} />}
        </>
    );
}

export default AllShows;