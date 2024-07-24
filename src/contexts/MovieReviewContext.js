import { createContext, useState, useContext, useEffect } from "react";

const MovieReviewContext = createContext();

export const MovieReviewProvider = ({
    children,
}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        const hardCodedReviews = [{
            movieId: 1,
            title: 'Shawshank Redeems Hollywood',
            review: 'Can Hollywood, usually creating things for entertainment purposes only, create art? To create something of this nature, a director must approach it in a most meticulous manner, due to the delicacy of the process. Such a daunting task requires an extremely capable artist with an undeniable managerial capacity and an acutely developed awareness of each element of art in their films, the most prominent; music, visuals, script, and acting. These elements, each equally important, must succeed independently, yet still form a harmonious union, because this mixture determines the fate of the artist\'s opus. Though already well known amongst his colleagues for his notable skills at writing and directing, Frank Darabont emerges with his feature film directorial debut, The Shawshank Redemption. Proving himself already a master of the craft, Darabont managed to create one of the most recognizable independent releases in the history of Hollywood. The Shawshank Redemption defines a genre, defies the odds, compels the emotions, and brings an era of artistically influential films back to Hollywood.',
            rating: 10
        },
        {
            movieId: 2,
            title: 'The greatest movie of all time!',
            review: 'One of the best films of all time, an absolute masterpiece. The Godfather is arguably the best gangster drama as well as setting the standard for cinema.',
            rating: 10
        },
        {
            movieId: 3,
            title: 'A Batman Of Shakesperean Proportions',
            review: 'Dark, yes, complex, ambitious. Christopher Nolan and his co-writer Jonathan Nolan deserve a standing ovation. I don\'t usually go for loud movies filled with mindless gore and violence. "The Dark Knight" is certainly loud and violent but it\'s not mindless. It has depth and soul. Even the Joker, in an extraordinary creation by Heath Ledger, is deeply human',
            rating: 9
        },
        {
            movieId: 4,
            title: 'Awesome',
            review: 'The movie started out pretty innocently, and for the first 20 minutes, I was wondering where the movie was going. Then it started to happen. The horrible cruelty of concentration camps. Oskar Schindler is an example of a man that no matter what the situation, there are people who won\'t go along with the cruelty of society. I\'m sure it took courage to do what he did, because one wrong move and you\'ll be dead.',
            rating: 10
        }];

        setReviews(hardCodedReviews);
    },[])

    const addReview = (review) => {
        let newRevies = reviews;
        newRevies.push(review);
        setReviews(newRevies);
    };

    const getReviewsByMovieId = (movieId) => {
        const matchingReviews = reviews.filter((review) => review.movieId === Number(movieId));
        return matchingReviews;
    }

    return (
        <MovieReviewContext.Provider value={{
            addReview,
            getReviewsByMovieId,
        }}>
            {children}
        </MovieReviewContext.Provider>  
    );
};

export const useMovieReviewContext = () => {
    const context = useContext(MovieReviewContext);

    return context;
};
