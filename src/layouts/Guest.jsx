import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext.jsx";
import Header from "./snippets/Header.jsx";

function Guest() {
    const {token} = useAuthContext()
    if (token) {
        return <Navigate to="/dashboard"/>
    }
    return <div>
        <Header />
        <Outlet></Outlet>
    </div>
}

export default Guest