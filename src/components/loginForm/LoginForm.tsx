import { useRef, useState, useContext } from 'react';
import './LoginForm.scss';
import { AppContext } from '../../context/app.context';
const LoginForm = () => {
    const { setIsLogged } = useContext(AppContext);

    const userNameRef = useRef<HTMLInputElement>();
    const userPasswordRef = useRef<HTMLInputElement>();
    const [error, setError] = useState(false)

    const login = () => {
        setError(false);

        const userName = userNameRef.current?.value;
        const userPassword = userPasswordRef.current?.value;

        if (userName === 'admin' && userPassword === 'admin123') {
            setIsLogged(true);

        } else {
            setError(true);
        }
    }

    return(
        <div className="login-form">
            <h2>Panel admina</h2>
            <form>
                <input ref={userNameRef} type="text" placeholder="Login" />
                <input ref={userPasswordRef} type="password" placeholder="Hasło" />
                <button type="button" onClick={() => login()}>Zaloguj</button>
                {error && <div className="error">Zły login lub hasło</div>}
            </form>
        </div>
    )
}

export default LoginForm;