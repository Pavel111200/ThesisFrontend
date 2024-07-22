import CardList from "../CardList/CardList";
import styles from './AllMovies.module.css';
import { useMovieContext } from "../../contexts/MovieContext";
import { Link } from "react-router-dom";

const AllMovies = () => {
    const { movies } = useMovieContext();

    return (
        <>
            <h1 className={styles.title}>All Movies</h1>
            {movies.length === 0 ?<> <p className={styles.title}>There are no movies yet. Would you like to add one?</p><Link to="/create/movie" className={styles.link}>Click Here!</Link> </> : <CardList movies={movies}/>}
        </>
    );
}

export default AllMovies;