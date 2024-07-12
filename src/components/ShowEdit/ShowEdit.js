import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './ShowEdit.module.css';
import { useShowContext } from "../../contexts/ShowContext";


const ShowEdit = () => {
    const {showId} = useParams();
    const [show, setShow] = useState({});
    const navitage = useNavigate();
    const {getShowById, editShow} = useShowContext();

    useEffect(() => {
        setShow(getShowById(showId))
    },[showId,getShowById]);

    const onSubmit = (e) => {
        e.preventDefault();
        editShow(show);
        navitage(`/catalog/shows/${showId}`)   
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
                <label htmlFor="seasons" className={styles.label}>
                    Season:
                </label>
                <input 
                    type="number" 
                    name="seasons" 
                    className={styles.input} 
                    value={Number(show.seasons) ? Number(show.seasons) : ''} 
                    onChange={onChange}
                />
                <label htmlFor="image" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="image" className={styles.input} value={show.image} onChange={onChange}/>
                <label htmlFor="creator" className={styles.label}>
                    Creator:
                </label>
                <input 
                type="text"
                    className={styles.input} 
                    name="creator" 
                    value={show.creator ? show.creator : ''}
                    onChange={onChange}
                />
                <label htmlFor="episodes" className={styles.label}>
                    Number of episodes:
                </label>
                <input 
                type="number"
                    className={styles.input} 
                    name="episodes" 
                    value={Number(show.episodes) ? Number(show.episodes) : ''}
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