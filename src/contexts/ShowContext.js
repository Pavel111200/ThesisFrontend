import { createContext, useState, useContext, useEffect } from "react";

const ShowContext = createContext();

export const ShowProvider = ({
    children,
}) => {
    const [shows, setShows] = useState([]);

    useEffect(() =>{
        const hardCodedShows = [{
            id: 1,
            title: 'Breaking Bad',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&shttps://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
            description: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family\'s future.',
            seasons: '5',
            episodes: '62',
            creator: 'Vince Gilligan',
            rating: '9.5/10',
            genre: 'Drama, Crime, Thriller',
        },
        {
            id: 2,
            title: 'Band of Brothers',
            image: 'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg',
            description: 'The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.',
            seasons: '1',
            episodes: '10',
            creator: '',
            rating: '9.4/10',
            genre: 'Drama, History, War',
        },
        {
            id: 3,
            title: 'Chernobyl',
            image: 'https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
            description: 'In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.',
            seasons: '1',
            episodes: '5',
            creator: 'Craig Mazin',
            rating: '9.3/10',
            genre: 'Drama, History, Thriller',
        },
        {
            id: 4,
            title: 'The Wire',
            image: 'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
            description: 'The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.',
            seasons: '5',
            episodes: '60',
            creator: 'David Simon',
            rating: '9.3/10',
            genre: 'Drama, Crime, Thriller',
        }];

        setShows(hardCodedShows);
    },[])

    const addShow = (show) => {
        let newShows = shows;
        show.id = shows.length + 1;
        newShows.push(show);
        setShows(newShows);
    };

    const getShowById = (showId) => {
        const show = shows.find((show) => show.id === Number(showId));
        return show;
    }

    return (
        <ShowContext.Provider value={{
            shows,
            addShow,
            getShowById,
        }}>
            {children}
        </ShowContext.Provider>  
    );
};

export const useShowContext = () => {
    const context = useContext(ShowContext);

    return context;
};
