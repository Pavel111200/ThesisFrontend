import ShowCard from './ShowCard/ShowCard';
import styles from './ShowCardList.module.css'

const ShowCardList = ({shows}) => {
    return(
        <ul className={styles.list}>
            {shows.map(s => <ShowCard show={s} key={s.id} />)}
        </ul>
    );
}

export default ShowCardList;