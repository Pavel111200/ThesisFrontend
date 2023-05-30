import { makeSuggestion } from '../../services/userService';
import styles from './UserSuggestion.module.css'
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const UserSuggestion = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            type,
            title,
        } = Object.fromEntries(new FormData(e.target));

        makeSuggestion(user.accessToken, { type, title})
            .then(() => {
                navigate('/');
            });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://icon-library.com/images/suggestion-icon/suggestion-icon-4.jpg"
                alt="Suggestion logo"
            />
            <h2 className={styles.title}>Make a suggestion</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input type="text" name="title" className={styles.input} />
                <div><input type="radio" id="movie" name="type" value="Movie"/>
                <label htmlFor="movie" className={styles.label}>Movie</label></div>
                <div><input type="radio" id="tvShow" name="type" value="TVShow"/>
                <label htmlFor="tvShow" className={styles.label}>TV Show</label></div>
            </div>
            <button type="submit" className={styles.btn}>
                Send
            </button>
        </form>
    );
}

export default UserSuggestion;