import CardList from "../CardList/CardList";
import styles from './Home.module.css';
import { useMovieContext } from "../../contexts/MovieContext";


const Home = () => {
    const {movies} = useMovieContext();

    return (
        <>
            <h1 className={styles.title}>Welcome to My Movie List!</h1>
            <h2 className={styles.subTitle}>Top 3 movies</h2>
            {movies.length === 0 ? <h2>Loading...</h2> :<CardList movies={movies.sort((a,b)=> b.rating - a.rating).slice(0,3)} /> }
        </>
    );
}

export default Home;