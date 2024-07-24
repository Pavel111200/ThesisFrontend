import { createContext, useState, useContext, useEffect } from "react";

const ShowReviewContext = createContext();

export const ShowReviewProvider = ({
    children,
}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        const hardCodedReviews = [{
            showId: 1,
            title: 'Absolutely Brilliant!!',
            review: 'Breaking Bad is every bit as good as everyone says it is. It\'s easily one of my favorites shows of all-time and one of the best shows in the history of television. Just read through the reviews and look at the 9.5 rating to see how loved this show really is. The writing and acting is what makes this show so special. I love this show so much that I\'ve already watched it all the way through twice already and plan on doing so again sometime in the near future. There\'s nothing more I can say about this incredible show that hasn\'t already been said so just go watch it. But plan ahead to give yourself enough time because you\'re going to want to binge this as quickly as you can. It\'s addicting once you start!',
            rating: 10
        },
        {
            showId: 2,
            title: 'Realistic',
            review: 'I am an 80 year old combat veteran (88th Inf. Div. Italy). I watched BOB on the History Channel. I was so overwhelmed, indeed a bit panicked by the authentic nature of 90+% of the uniforms, signs, noises (I take exception to the sound of incoming artillery). I cried several times at the authentic staging - for them and me. I cannot believe I\'ll watch it again. It\'s too much. Too real. We never had so much water allowed in a shower.',
            rating: 10
        },
        {
            showId: 3,
            title: 'I highly recommend this film!',
            review: 'Hi. I\'m from Kiev, Ukraine. I was born in 1983 and I was 2 and a half years when the Chernobyl catastrophe happened. I remember 1980s and I can tell that the authors of this film made a GREAT job to show every detail of what the world look for is in the times of Soviet union. The telephones, the clothes, the haircuts, the cracked paint on the window sills, even the door glass is similar to what I remember. There are couple of things which seemed weird to me: firefighters didn\'t have the red stars on their helmets, and most of the time people use the short forms of the names when they talk to each other (Vasya, not Vasiliy, Lyuda, not Lyudmila). But the most important thing that this film shows is that the soviet authoritiies lied to people about this catastrophe all the time',
            rating: 10
        },
        {
            showId: 4,
            title: 'Hard to put into words how phenomenal The Wire is',
            review: 'I have seen many brilliant shows, and The Wire is one of them. Even the word brilliant isn\'t enough to put into words how good this series is. The Wire is incredibly well made, with moody lighting, striking location work that also brings atmosphere and great photography, while the music is very haunting. The Wire with its thoughtful and tense dialogue also has some of the best writing of any show I\'ve seen, the stories are ceaselessly compelling and the characters are rich and unforgettable. All the episodes are superbly directed, and very rarely do you feel cheated at the end of episodes. The acting is superb, Dominic West and Idris Elba are especially brilliant. In conclusion, phenomenal. 10/10 Bethany Cox',
            rating: 10
        }];

        setReviews(hardCodedReviews);
    },[])

    const addReview = (review) => {
        let newRevies = reviews;
        newRevies.push(review);
        setReviews(newRevies);
    };

    const getReviewsByShowId = (showId) => {
        const matchingReviews = reviews.filter((review) => review.showId === Number(showId));
        return matchingReviews;
    }

    return (
        <ShowReviewContext.Provider value={{
            addReview,
            getReviewsByShowId,
        }}>
            {children}
        </ShowReviewContext.Provider>  
    );
};

export const useShowReviewContext = () => {
    const context = useContext(ShowReviewContext);

    return context;
};
