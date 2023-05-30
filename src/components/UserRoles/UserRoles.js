import { useUserContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";
import { Navigate } from "react-router-dom";
import User from "./User/User";
import styles from "./UserRoles.module.css"

const UserRoles = () => {
    const { user } = useUserContext();
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        try {
            getUsers(user.accessToken)
                .then(res=> setUsers(res))
        } catch (error) {
            <Navigate to='/404' replace />
        }
    },[user.accessToken]);
    
    return (
        <>
            <h1 className={styles.title}>Users</h1>
            <ul>
                {users.length ===0 ? <h2>Loading...</h2> : users.filter(u=>u.role==="User").map(u=><User user={u} key={u.id}/>)}
            </ul>
        </>
    )
}

export default UserRoles;