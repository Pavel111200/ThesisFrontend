import styles from './Create.module.css'
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';

const Create = () => {
    const navigate = useNavigate();
    const {addMovie} = useMovieContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            image,
            title,
            genre,
            runtime,
            writer,
            director,
            createdOn,
            description
        } = Object.fromEntries(new FormData(e.target));

        const movie = {
            title: title,
            image: image,
            genre: genre,
            runtime: runtime,
            writer: writer,
            director: director,
            createdOn: createdOn,
            description: description,
            rating: Math.floor(Math.random() * 11),
        };

        addMovie(movie);
        navigate("/catalog/movies");
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
                alt="Movie logo"
            />
            <h2 className={styles.title}>Create Movie</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input type="text" name="title" className={styles.input} />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input type="text" name="genre" className={styles.input} />
                <label htmlFor="runtime" className={styles.label}>
                    Runtime:
                </label>
                <input type="time" name="runtime" className={styles.input} />
                <label htmlFor="image" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="image" className={styles.input} />
                <label htmlFor="writer" className={styles.label}>
                    Writer:
                </label>
                <input type="text" name="writer" className={styles.input} />
                <label htmlFor="director" className={styles.label}>
                    Director:
                </label>
                <input type="text" className={styles.input} name="director"/>
                <label htmlFor="createdOn" className={styles.label}>
                    Release date:
                </label>
                <input type="date" className={styles.input} name="createdOn"/>
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

export default Create;