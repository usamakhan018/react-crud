import {createContext, useContext, useState} from "react";

const AuthContext = createContext({
    user: null,
    token: null,
    setUser: null,
    setToken: null,
})


export const ContextProvider = ({children}) => {
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [user, setUser] = useState()

    function setToken(token) {
        if(token) {
            _setToken(token);
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return <AuthContext.Provider value={{
        user: user,
        setUser: setUser,
        token: token,
        setToken: setToken,

    }}>
        {children}
    </AuthContext.Provider>
}
export const useAuthContext = () => useContext(AuthContext);