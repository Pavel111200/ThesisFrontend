import { deleteSuggestion } from "../../services/userService";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./MovieSuggestion.module.css"
import { useNavigate } from "react-router-dom";

const MovieSuggestion = ({movie}) => {
    const {user} = useUserContext();
    const navigate = useNavigate();

    const DeleteHandler = () => {
        deleteSuggestion(movie.id, user.accessToken)
        .then(()=> navigate('/catalog/movies'))
    }

    return(
        <li className={styles.list}>
            <div className={styles.item}>{movie.title}</div>
            <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                Delete
            </button>
        </li>
    );
}

export default MovieSuggestion;