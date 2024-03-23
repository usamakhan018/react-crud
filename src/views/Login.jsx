import {useRef, useState} from 'react'
import axiosClient from '../axios'
import {useAuthContext} from "../contexts/AuthContext.jsx";
export default function Login () {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {setUser, setToken} = useAuthContext()
    const [errors, setErrors] = useState(null)

    const onLogin = async (e) => {
        e.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        await axiosClient.get('sanctum/csrf-cookie')
        const response = await axiosClient.post('api/login', payload)
        console.log(response)
        if (response.data.token) {
            setToken(response.data.token)
            setUser(response.data.user)
        } else {
            setErrors(response.data.errors)
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h3 className="text-center">Login</h3>
                <input type="email" ref={emailRef} className="form-control mt-2" placeholder="Email"/>
                <input type="password" ref={passwordRef} className="form-control mt-2" placeholder="Password"/>
                <button className="form-control btn btn-danger mt-2" onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}