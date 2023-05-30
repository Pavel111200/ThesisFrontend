import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/userService';
import { useUserContext } from '../../contexts/UserContext';

const Login = () => {
    const { userLogin } = useUserContext();
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        login({ email, password })
            .then(result=> {
                userLogin(result);
                console.log(result);
                navigate('/');
            });

    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit}>
                <img className={styles.formImg} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user-logo" />
                <h2 className={styles.formTitle}>Login Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Login</button>

                <Link to="/register" className={styles.link}>Don't have an account? Click here.</Link>
            </form>
        </div>
    );
}

export default Login;