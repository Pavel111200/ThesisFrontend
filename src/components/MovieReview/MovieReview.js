import styles from './MovieReview.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieReviewContext } from '../../contexts/MovieReviewContext';

const MovieReview = () => {
    const navigate = useNavigate();
    const {movieId} = useParams();
    const {addReview} = useMovieReviewContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            rating,
            review
        } = Object.fromEntries(new FormData(e.target));

        const newReview = {
            movieId: Number(movieId),
            title: title,
            review: review,
            rating: rating
        }

        addReview(newReview)
        navigate(`/catalog/movies/${movieId}`)
    }

    return (
    <form className={styles.form} onSubmit={onSubmit}>
        <img
            className={styles.img}
            src="https://www.freeiconspng.com/thumbs/review-icon-png/review-icon-13.png"
            alt="Review logo"
        />
        <h2 className={styles.title}>Add Review</h2>
        <div className={styles.wrapper}>
            <label htmlFor="title" className={styles.label}>
                Title:
            </label>
            <input type="text" name="title" className={styles.input} />            
            <label htmlFor="rating" className={styles.label}>
                Rating from 1 to 10:
            </label>
            <input type="number" min="1" max="10" name="rating" className={styles.input} />
            <label htmlFor="review" className={styles.label}>
                Description:
            </label>
            <textarea
                name="review"
                cols={30}
                rows={10}
                className={styles.input}
            />
        </div>
        <button type="submit" className={styles.btn}>
            Submit
        </button>
    </form>
    );
}

export default MovieReview