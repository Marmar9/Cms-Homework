import { useContext } from 'react';
import styles from './Admin.module.scss';

import { LoginForm, Dashboard } from '../../components';
import { AppContext } from '../../context/app.context';
const Admin = () => {
    const { isLogged  } = useContext(AppContext);
        return(
        <div className={styles.container}>
            {/* {isLogged ? <Dashboard /> : <LoginForm />} */}
            <Dashboard />
        </div>
    );
}

export default Admin;