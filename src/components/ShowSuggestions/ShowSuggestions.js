import { getShowSuggestions } from "../../services/showService";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import styles from "./ShowSuggestions.module.css";
import ShowSuggestion from "./ShowSuggestion";

const ShowSuggestions = () =>{
    const [shows, setShows] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        try {
            getShowSuggestions(user.accessToken)
        .then(result => {
            setShows(result);
        })
        } catch (error) {
            return (
                <Navigate to='/404' replace />
            )
        }  
    },[user.accessToken]);


    return(
        <>
        <h1 className={styles.title}>Suggested Shows</h1>
        <ul>
        {shows.length === 0 ? <h2>No shows suggestions!</h2> : shows.map(s=><ShowSuggestion show={s} key={s.id}/>)}
        </ul>
        </>
    );
}

export default ShowSuggestions;