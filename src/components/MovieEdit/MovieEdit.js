import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './MovieEdit.module.css';
import { useMovieContext } from "../../contexts/MovieContext";


const MovieEdit = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const navitage = useNavigate();
    const {getMovieById, editMovie} = useMovieContext();

    useEffect(()=>{
        setMovie(getMovieById(movieId))
    },[movieId, getMovieById])

    const onSubmit = (e) => {
        e.preventDefault();
        editMovie(movie);
        navitage(`/catalog/movies/${movieId}`);
        
    }

    const onChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
                alt="Movie logo"
            />
            <h2 className={styles.title}>Edit Movie</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input 
                    type="text" 
                    name="title" 
                    className={styles.input} 
                    value={movie.title} 
                    onChange={onChange}
                    />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input 
                    type="text" 
                    name="genre" 
                    className={styles.input}  
                    value={movie.genre ? movie.genre : ''} 
                    onChange={onChange}
                />
                <label htmlFor="runtime" className={styles.label}>
                    Runtime:
                </label>
                <input 
                    type="text" 
                    name="runtime" 
                    className={styles.input} 
                    value={movie.runtime ? movie.runtime : ''} 
                    onChange={onChange}
                />
                <label htmlFor="image" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="image" className={styles.input} value={movie.image} onChange={onChange}/>
                <label htmlFor="writer" className={styles.label}>
                    Writer:
                </label>
                <input 
                type="text"
                    className={styles.input} 
                    name="writer" 
                    value={movie.writer ? movie.writer : ''}
                    onChange={onChange}
                />
                <label htmlFor="director" className={styles.label}>
                    Director:
                </label>
                <input 
                type="text"
                    className={styles.input} 
                    name="director" 
                    value={movie.director ? movie.director : ''}
                    onChange={onChange}
                />
                <label htmlFor="createdOn" className={styles.label}>
                    Release date:
                </label>
                <input 
                type="text"
                    className={styles.input} 
                    name="createdOn" 
                    value={movie.createdOn ? movie.createdOn : ''}
                    onChange={onChange}
                />
                <label htmlFor="description" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    className={styles.input}
                    value={movie.description}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Edit
            </button>
        </form>
    );
}

export default MovieEdit;