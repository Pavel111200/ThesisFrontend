import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({
    children,
}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const hardCodedMovies = [{
            id: 1,
            title: 'The Shawshank Redemption',
            image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
            description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
            createdOn: '1994',
            writer: 'Stephen King, Frank Darabont',
            director: 'Frank Darabont',
            rating: '9.3/10',
            genre: 'Drama',
            runtime: '2h 22m'
        },
        {
            id: 2,
            title: 'The Godfather',
            image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
            createdOn: '1972',
            writer: 'Mario Puzo, Francis Ford Coppola',
            director: 'Francis Ford Coppola',
            rating: '9.2/10',
            genre: 'Drama, Crime',
            runtime: '2h 55m'
        },
        {
            id: 3,
            title: 'The Dark Knight',
            image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            createdOn: '2008',
            writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
            director: 'Christopher Nolan',
            rating: '9.0/10',
            genre: 'Drama, Crime, Action',
            runtime: '2h 32m'
        },
        {
            id: 4,
            title: 'Schindlers List',
            image: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
            createdOn: '1993',
            writer: 'Thomas Keneally, Steven Zaillian',
            director: 'Steven Spielberg',
            rating: '9.0/10',
            genre: 'Drama, Biography, History',
            runtime: '3h 15m'
        }];

        setMovies(hardCodedMovies);
    },[])

    const addMovie = (movie) => {
        let newMovies = movies;
        movie.id = movies.length + 1;
        newMovies.push(movie);
        setMovies(newMovies);
    };

    const getMovieById = (movieId) => {
        const movie = movies.find((movie) => movie.id === Number(movieId));
        return movie;
    }

    const editMovie = (editedMovie) => {       
        let newMovies = movies;
        newMovies.splice(editedMovie.id - 1, 1, editedMovie)
        return setMovies(newMovies);
    }

    return (
        <MovieContext.Provider value={{
            movies,
            addMovie,
            getMovieById,
            editMovie,
        }}>
            {children}
        </MovieContext.Provider>  
    );
};

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    return context;
};
