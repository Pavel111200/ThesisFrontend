import { deleteSuggestion } from "../../services/userService";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./ShowSuggestion.module.css"
import { useNavigate } from "react-router-dom";

const ShowSuggestion = ({show}) => {
    const {user} = useUserContext();
    const navigate = useNavigate();

    const DeleteHandler = () => {
        deleteSuggestion(show.id, user.accessToken)
        .then(()=> navigate('/catalog/shows'))
    }

    return(
        <li className={styles.list}>
            <div className={styles.item}>{show.title}</div>
            <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                Delete
            </button>
        </li>
    );
}

export default ShowSuggestion;