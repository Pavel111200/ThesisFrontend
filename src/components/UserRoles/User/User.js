import styles from './User.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import { makeAdmin } from '../../../services/userService';

const User = (props) => {
    const {user} = useUserContext();
    const navigate = useNavigate();

    const RoleHandler = () => {
        makeAdmin(props.user.id, user.accessToken)
        .then(()=> navigate('/'))
    }

    return (
        <li className={styles.list}>
            <div className={styles.item}>{props.user.userName}</div>
            <div className={styles.item}>{props.user.email}</div>
            <button onClick={RoleHandler} className={`${styles.btn} ${styles.item}`}>Make Admin</button>
        </li>
    );
}

export default User;