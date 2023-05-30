import Review from '../Review/Review';

const ReviewList = ({reviews}) => {
        console.log(reviews);
    return(
        <div>
            {reviews === undefined ? <p>Loading...</p> : reviews.map(m => <Review review={m} key={m.title+m.rating} />)}
        </div>
    );
}

export default ReviewList;