import {useRef} from 'react'
import axiosClient from '../../axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const titleRef = useRef()
    const contentRef = useRef()
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            title: titleRef.current.value,
            content: contentRef.current.value
        }
        const res = await axiosClient.post('api/posts/create', payload)
        navigate('/dashboard')
    }

    return <div>
        <div className="card">
            <div className="card-header">Create Post</div>
            <div className="card-body">
                <input ref={titleRef} type="text" className="form-control mb-2" placeholder="title" />
                <textarea ref={contentRef} className="form-control mb-2" cols="30" rows="10" placeholder="content"></textarea>
                <button onClick={onSubmit} className="btn btn-secondary">Create Post</button>
            </div>
            
        </div>
    </div>
}

export default CreatePost