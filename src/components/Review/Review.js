import styles from "./Review.module.css"

const Review = ({review}) => {
    return (
        <div className={styles.review}>
                <p className={styles.info}>{review.title}</p>
                <p className={styles.info}>Rating: {review.rating}/10</p>
                <p className={styles.desc}>
                    {review.review}
                </p>
        </div>
    )
}

export default Review