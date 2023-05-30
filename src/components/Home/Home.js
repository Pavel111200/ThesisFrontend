import CardList from "../CardList/CardList";
import styles from './Home.module.css';
import { useEffect,useState } from "react";
import { getAll } from "../../services/movieService";


const Home = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getAll()
        .then(result => {
            setMovies(result.sort((a,b) => {
                a.rating === undefined ? a.rating = '0' : a.rating = a.rating;

                b.rating === undefined ? b.rating ='0' : b.rating = b.rating;

                return b.rating- a.rating;
            }).slice(0,3));
        })
    },[]);

    return (
        <>
            <h1 className={styles.title}>Welcome to My Movie List!</h1>
            <h2 className={styles.subTitle}>Top 3 movies</h2>
            {movies.length === 0 ? <h2>Loading...</h2> :<CardList movies={movies} /> }
        </>
    );
}

export default Home;