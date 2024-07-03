import CardList from "../CardList/CardList";
import styles from './AllMovies.module.css';
import { useMovieContext } from "../../contexts/MovieContext";

const AllMovies = () => {
    const { movies } = useMovieContext();

    return (
        <>
            <h1 className={styles.title}>All Movies</h1>
            <CardList movies={movies}/>
        </>
    );
}

export default AllMovies;