import styles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { register } from '../../services/userService';


const Register = () => {
    const { userLogin } = useUserContext();
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            username
        } = Object.fromEntries(new FormData(e.target));

        register({ email, password, username })
            .then(result=> {
                userLogin(result);
                navigate('/');
            });

    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit}>
                <img className={styles.formImg} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user-logo" />
                <h2 className={styles.formTitle}>Register Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Username" className={styles.formInput}  name="username"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Register</button>

                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </form>
        </div>
    );
}

export default Register;