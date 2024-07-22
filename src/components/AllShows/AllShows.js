import ShowCardList from "../ShowCardList/ShowCardList";
import styles from './AllShows.module.css';
import { useShowContext } from "../../contexts/ShowContext";
import { Link } from "react-router-dom";

const AllShows = () => {
    const {shows} = useShowContext();

    return (
        <>
            <h1 className={styles.title}>All Shows</h1>
            {shows.length === 0 ? <> <p className={styles.title}>There are no shows yet. Would you like to add one?</p><Link to="/create/show" className={styles.link}>Click Here!</Link> </> : <ShowCardList shows={shows} />}
        </>
    );
}

export default AllShows;