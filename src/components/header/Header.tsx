import styles from './Header.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Link } from 'react-router-dom';
import logoutIcon from "../../assets/logout.svg"
// import logoutIcon from "assets/logout.svg"

const Header = () => {
    const {isLogged, setIsLogged} = useContext(AppContext);
    
    return(
            <div className={`${styles['header-container']} container`}>
            <h1 className={styles.logo}>#<span>KURSY</span>_online</h1>
            <div className={styles.menu}>
                <div className={styles['menu-element']}>
                <a href="#boxes">Oferta</a>
                </div>
                <div className={styles['menu-element']}>
                <a href="#courses">Kursy</a>
                </div>
                {isLogged && <div className={styles['menu-element']}>
                <Link to={"/admin"}>Admin</Link>
                </div>}
                {isLogged && <div className={styles['logout-element']}> <img className={styles['logout-icon']} src={logoutIcon} alt="" /></div>}
            </div>
        </div>
    )
}

export default Header;