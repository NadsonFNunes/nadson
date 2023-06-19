import { createContext, useState } from "react";
import { login, logout, register } from "../services/firebase";

const AuthContext = createContext({
    userID: null,
    logado: false,
    erroLogin: null,
    login: (data) => { },
    logout: () => { },
});

export function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({
        userID: null,
        logado: false
    });
    const [erroLogin, setErroLogin] = useState();

    async function handleLogin(email, senha) {
        const {user, erro} = await login(email, senha); 
        setErroLogin(erro)
        setCurrentUser({ userID: user, logado: erro == null })
        return erro == null
    }

    async function handleLogout() {
        await logout();
        setCurrentUser({ userID: null, logado: false });
    }

    const context = {
        userID: currentUser.userID,
        logado: currentUser.logado,
        erroLogin,
        login: handleLogin,
        logout: handleLogout
    }

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;