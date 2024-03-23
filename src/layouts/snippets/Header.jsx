import {Link, Navigate} from 'react-router-dom'
import {useAuthContext} from "../../contexts/AuthContext.jsx";
import { useEffect } from 'react';
import axiosClient from '../../axios.js';

function Header() {
    const {user, token, setToken, setUser} = useAuthContext()
    useEffect(() => {
        axiosClient('api/user').then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        
    }, [])
    const onLogout = (e) => {
        setToken(null)
        setUser(null)
    }
    return <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Brand</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    { token ? (
                        <>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                            <ul style={{marginLeft: "auto"}} className='navbar-nav'>
                                <li className="nav-item">
                                    <b><i>{user ? user.name : "John Doe"}</i></b>
                                </li>
                                <li className="nav-item">
                                    <a href='/' onClick={onLogout} className='btn btn-danger'>Logout</a>
                                </li>
                            </ul>
                        </>


                    ) : (
                        <>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </>

                    )}
                </div>
            </div>
        </nav>
    </div>
}


export default Header