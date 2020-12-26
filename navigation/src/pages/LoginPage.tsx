import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';
import { AuthContextType } from '../contexts/AuthContextType';

const LoginPage = () => {
    const auth = useContext<AuthContextType>(authContext);
    const history = useHistory();

    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        auth.login(email);
        history.replace("/private");
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>E-mail</label>
                <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;