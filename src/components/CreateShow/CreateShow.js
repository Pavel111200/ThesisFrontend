import { create } from '../../services/showService';
import styles from './CreateShow.module.css'
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const CreateShow = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            image,
            title,
            genre,
            numberOfEpisodes,
            writer,
            season,
            description
        } = Object.fromEntries(new FormData(e.target));

        create({ image, title, genre, numberOfEpisodes, writer, season, description }, user.accessToken)
            .then(() => {
                navigate('/');
            });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://cdn-icons-png.flaticon.com/512/1234/1234684.png"
                alt="Show logo"
            />
            <h2 className={styles.title}>Create Show</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input type="text" name="title" className={styles.input} />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input type="text" name="genre" className={styles.input} />
                <label htmlFor="numberOfEpisodes" className={styles.label}>
                    Number of Episodes:
                </label>
                <input type="number" name="numberOfEpisodes" className={styles.input} />
                <label htmlFor="image" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="image" className={styles.input} />
                <label htmlFor="writer" className={styles.label}>
                    Writer:
                </label>
                <input type="text" name="writer" className={styles.input} />
                <label htmlFor="season" className={styles.label}>
                    Season:
                </label>
                <input type="number" className={styles.input} name="season"/>
                <label htmlFor="description" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Create
            </button>
        </form>
    );
}

export default CreateShow;