import { getMovieSuggestions } from "../../services/movieService";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import styles from "./MovieSuggestions.module.css";
import MovieSuggestion from "./MovieSuggestion";

const MovieSuggestions = () =>{
    const [movies, setMovies] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        try {
            getMovieSuggestions(user.accessToken)
        .then(result => {
            setMovies(result);
        })
        } catch (error) {
            return (
                <Navigate to='/404' replace />
            )
        }  
    },[user.accessToken]);


    return(
        <>
        <h1 className={styles.title}>Suggested Movies</h1>
        <ul>
        {movies.length === 0 ? <h2>No movie suggestions!</h2> : movies.map(m=><MovieSuggestion movie={m} key={m.id}/>)}
        </ul>
        </>
    );
}

export default MovieSuggestions;