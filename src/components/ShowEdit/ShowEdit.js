import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { editShow, getOne } from "../../services/showService";
import styles from './ShowEdit.module.css';


const ShowEdit = () => {
    const {showId} = useParams();
    const [show, setShow] = useState({});
    const {user} = useUserContext();
    const navitage = useNavigate();

    useEffect(() => {
        try {
            getOne(showId)
            .then(result => setShow(result));
        } catch (error) {
            console.log(error);
        }
    },[showId]);

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            editShow(show,user.accessToken)
        .then(()=> navitage(`/catalog/shows/${showId}`));
        } catch (error) {
            <Navigate to='/404' replace />
        }

        
    }

    const onChange = (e) => {
        setShow({
            ...show,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://cdn-icons-png.flaticon.com/512/1234/1234684.png"
                alt="Show logo"
            />
            <h2 className={styles.title}>Edit Show</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input 
                    type="text" 
                    name="title" 
                    className={styles.input} 
                    value={show.title} 
                    onChange={onChange}
                    />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input 
                    type="text" 
                    name="genre" 
                    className={styles.input}  
                    value={show.genre ? show.genre : ''} 
                    onChange={onChange}
                />
                <label htmlFor="season" className={styles.label}>
                    Season:
                </label>
                <input 
                    type="number" 
                    name="season" 
                    className={styles.input} 
                    value={show.season ? show.season : ''} 
                    onChange={onChange}
                />
                <label htmlFor="image" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="image" className={styles.input} value={show.image} onChange={onChange}/>
                <label htmlFor="writer" className={styles.label}>
                    Writer:
                </label>
                <input 
                type="text"
                    className={styles.input} 
                    name="writer" 
                    value={show.writer ? show.writer : ''}
                    onChange={onChange}
                />
                <label htmlFor="numberOfEpisodes" className={styles.label}>
                    Number of episodes:
                </label>
                <input 
                type="number"
                    className={styles.input} 
                    name="numberOfEpisodes" 
                    value={show.numberOfEpisodes ? show.numberOfEpisodes : ''}
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
                    value={show.description}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Edit
            </button>
        </form>
    );
}

export default ShowEdit;