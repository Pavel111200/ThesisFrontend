import ShowCardList from "../ShowCardList/ShowCardList";
import styles from './AllShows.module.css';
import { useShowContext } from "../../contexts/ShowContext";

const AllShows = () => {
    const {shows} = useShowContext();

    return (
        <>
            <h1 className={styles.title}>All Shows</h1>
            {shows.length === 0 ? <h2>Loading...</h2> : <ShowCardList shows={shows} />}
        </>
    );
}

export default AllShows;