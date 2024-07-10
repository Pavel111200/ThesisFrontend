import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';


const Header = () => {
    const { user, isAuthenticated } = useUserContext();

    return (
        <nav>
            <ul type="none" className={styles.list}>
                {isAuthenticated ? 
                <li className={styles.listItem}>
                    Welcome, {user.username ? user.username : user.email}
                </li> : 
                <li className={styles.listItem}>
                    Welcome, guest
                </li>}
                <li className={styles.listItem}>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    Movies
                    <div className={styles.dropdown}>
                        <Link to="/catalog/movies" className={styles.link}>All Movies</Link>
                        <Link to="likedmovies" className={styles.link}>Liked Movies</Link>
                        <Link to="/create/movie" className={styles.link}>Create Movie</Link>
                        {user.role ==="Admin" &&
                        <>
                            
                            <Link to="/catalog/movies/suggestions" className={styles.link}>Suggested Movies</Link>
                        </>
                        }
                    </div>
                </li>
                <li className={styles.listItem}>
                    Shows
                    <div className={styles.dropdown}>
                        <Link to="/catalog/shows" className={styles.link}>All Shows</Link>
                        <Link to="likedshows" className={styles.link}>Liked Shows</Link>
                        {user.role ==="Admin" &&
                        <>
                            <Link to="/create/show" className={styles.link}>Create Show</Link>
                            <Link to="/catalog/shows/suggestions" className={styles.link}>Suggested Shows</Link>
                        </>
                        }
                    </div>
                </li>
                {user.role === "Admin" && 
                    <li className={styles.listItem}>
                        Users
                        <div className={styles.dropdown}>
                            <Link to="/users/roles" className={styles.link}>Change Roles</Link>
                        </div>
                    </li>
                }
                {user.role === "User" && 
                <li className={styles.listItem}>
                    <Link to="/users/suggestion" className={styles.link}>Suggestion</Link>
                </li>
                }            
                {isAuthenticated ||
                    <>
                        <li className={styles.listItem}>
                            <Link to="/login" className={styles.link}>Login</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/register" className={styles.link}>Register</Link>
                        </li>
                    </>
                }
                {isAuthenticated &&
                    <li className={styles.listItem}>
                        <Link to="/logout" className={styles.link}>Logout</Link>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Header;