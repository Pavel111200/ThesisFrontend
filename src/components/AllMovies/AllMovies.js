import { useEffect, useState } from "react";
import { getAll } from "../../services/movieService";
import CardList from "../CardList/CardList";
import styles from './AllMovies.module.css';
import { Navigate } from "react-router-dom";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            getAll()
        .then(result => {
            setMovies(result);
        })
        } catch (error) {
            return (
                <Navigate to='/404' replace />
            )
        }

        
    },[]);

    return (
        <>
            <h1 className={styles.title}>All Movies</h1>
            {movies.length === 0 ? <h2>Loading...</h2> : <CardList movies={movies}/>}
        </>
    );
}

export default AllMovies;